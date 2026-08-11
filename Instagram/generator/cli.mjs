#!/usr/bin/env node
import { generate, listContents } from './generate.mjs';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`Uso:
  npm run instagram:generate                 Gera todos os conteúdos
  npm run instagram:generate -- <slug>       Gera apenas um conteúdo
  npm run instagram:list                     Lista os conteúdos disponíveis`);
  process.exit(0);
}

try {
  if (args.includes('--list')) {
    const contents = await listContents();
    for (const content of contents) {
      console.log(`${content.slug} (${content.artworks} arte${content.artworks === 1 ? '' : 's'}) — ${content.title}`);
    }
    process.exit(0);
  }

  const selector = args.find((arg) => !arg.startsWith('-'));
  const result = await generate(selector);
  console.log(`Geração concluída: ${result.artworks} arte${result.artworks === 1 ? '' : 's'} em ${result.contents} conteúdo${result.contents === 1 ? '' : 's'}.`);
} catch (error) {
  console.error(`Erro: ${error.message}`);
  process.exit(1);
}
