import { execFileSync } from 'node:child_process';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';
import { renderTemplate, templateRegistry } from './templates.mjs';
import { C, dimensions } from './theme.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const postsRoot = path.join(here, '..', 'posts');
const contentPath = path.join(here, 'content', 'series.json');

function validateConfig(config) {
  if (!Array.isArray(config.contents) || config.contents.length === 0) {
    throw new Error('A configuração precisa possuir ao menos um conteúdo.');
  }

  const slugs = new Set();
  for (const content of config.contents) {
    if (!content.slug || !content.title || !Array.isArray(content.slides) || content.slides.length === 0) {
      throw new Error(`Conteúdo inválido: ${JSON.stringify(content)}`);
    }
    if (slugs.has(content.slug)) {
      throw new Error(`Slug duplicado: ${content.slug}`);
    }
    slugs.add(content.slug);

    const files = new Set();
    for (const slide of content.slides) {
      if (!slide.file || !slide.template) {
        throw new Error(`Slide inválido em ${content.slug}.`);
      }
      if (files.has(slide.file)) {
        throw new Error(`Arquivo duplicado em ${content.slug}: ${slide.file}`);
      }
      if (!templateRegistry[slide.template]) {
        throw new Error(`Template desconhecido em ${content.slug}: ${slide.template}`);
      }
      files.add(slide.file);
    }
  }
}

function normalizedSlug(slug) {
  return slug.replace(/^\d+-/, '');
}

function selectContents(contents, selector) {
  if (!selector) return contents;
  const selected = contents.filter(({ slug }) => slug === selector || normalizedSlug(slug) === selector);
  if (selected.length === 0) {
    throw new Error(`Conteúdo não encontrado: ${selector}. Use --list para ver as opções.`);
  }
  return selected;
}

function imageMagickCommand() {
  for (const candidate of ['magick', 'convert']) {
    try {
      execFileSync(candidate, ['-version'], { stdio: 'ignore' });
      return candidate;
    } catch {
      // Tenta o próximo executável.
    }
  }
  throw new Error('ImageMagick não encontrado. Instale o comando magick ou convert.');
}

async function renderArtwork(content, slide, convertCommand) {
  const output = path.join(postsRoot, content.slug);
  await mkdir(output, { recursive: true });

  const svg = renderTemplate(slide.template, slide.data ?? {}).replace(/[ \t]+$/gm, '');
  const svgPath = path.join(output, `${slide.file}.svg`);
  const pngPath = path.join(output, `${slide.file}.png`);
  const jpgPath = path.join(output, `${slide.file}.jpg`);

  await writeFile(svgPath, svg);
  const rendered = new Resvg(svg, { fitTo: { mode: 'width', value: dimensions.width } }).render();
  await writeFile(pngPath, rendered.asPng());

  const convertArgs = convertCommand === 'magick'
    ? [pngPath, '-background', C.cream, '-flatten', '-sampling-factor', '4:2:0', '-quality', '92', jpgPath]
    : [pngPath, '-background', C.cream, '-flatten', '-sampling-factor', '4:2:0', '-quality', '92', jpgPath];

  execFileSync(convertCommand, convertArgs, { stdio: 'inherit' });
  await rm(pngPath);
  return jpgPath;
}

export async function generate(selector) {
  const config = JSON.parse(await readFile(contentPath, 'utf8'));
  validateConfig(config);
  const selected = selectContents(config.contents, selector);
  const convertCommand = imageMagickCommand();
  const outputs = [];

  for (const content of selected) {
    for (const slide of content.slides) {
      outputs.push(await renderArtwork(content, slide, convertCommand));
    }
  }

  return { contents: selected.length, artworks: outputs.length, outputs };
}

export async function listContents() {
  const config = JSON.parse(await readFile(contentPath, 'utf8'));
  validateConfig(config);
  return config.contents.map(({ slug, title, slides }) => ({ slug, title, artworks: slides.length }));
}
