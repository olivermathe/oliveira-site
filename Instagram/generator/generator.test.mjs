import assert from 'node:assert/strict';
import test from 'node:test';
import { listContents } from './generate.mjs';
import { renderTemplate, templateRegistry } from './templates.mjs';

test('todos os templates geram um SVG no formato 1080 x 1350', () => {
  for (const template of Object.keys(templateRegistry)) {
    const svg = renderTemplate(template);
    assert.match(svg, /<svg[^>]+width="1080"[^>]+height="1350"/);
    assert.match(svg, />OLIVEIRA SITES<\/text>/);
  }
});

test('as artes não exibem identificadores internos', () => {
  for (const template of Object.keys(templateRegistry)) {
    const svg = renderTemplate(template);
    assert.doesNotMatch(svg, /CARROSSEL/i);
    assert.doesNotMatch(svg, /OLIVEIRA SITES\s*·\s*\d+/i);
    assert.doesNotMatch(svg, />\d+\s*\/\s*\d+<\/text>/i);
  }
});

test('a configuração declarativa possui sete conteúdos e onze artes', async () => {
  const contents = await listContents();
  assert.equal(contents.length, 7);
  assert.equal(contents.reduce((total, content) => total + content.artworks, 0), 11);
});

test('o template genérico aceita conteúdo sem criar um novo desenho', () => {
  const svg = renderTemplate('headline-visual', {
    badgeLabel: 'TESTE',
    title: ['Título configurável'],
    description: ['Descrição configurável'],
    visual: 'phone',
    cta: 'CHAMADA CONFIGURÁVEL',
    theme: 'dark'
  });
  assert.match(svg, /Título configurável/);
  assert.match(svg, /CHAMADA CONFIGURÁVEL/);
});
