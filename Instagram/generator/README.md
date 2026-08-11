# Gerador de posts da Oliveira Sites

O gerador monta artes de 1080 × 1350 px combinando a identidade visual da marca, componentes SVG reutilizáveis, templates e uma configuração declarativa.

## Estrutura

- `theme.mjs`: cores, dimensões, tipografia e dados da marca.
- `components.mjs`: logo, cabeçalho, rodapé, textos, badges, setas, celular e janela de navegador.
- `templates.mjs`: composições reutilizáveis construídas com os componentes.
- `content/series.json`: conteúdos, arquivos e templates que serão renderizados.
- `generate.mjs`: validação, seleção e exportação em SVG e JPG.
- `cli.mjs`: interface de linha de comando.
- `generator.test.mjs`: testes do catálogo e das regras visuais.

Informações de controle, como número do post, número da página, `carrossel`, `capa` e `slide`, podem existir nos nomes dos arquivos e pastas, mas não devem ser exibidas na arte.

## Comandos

```bash
npm run instagram:list
npm run instagram:generate
npm run instagram:generate -- site-no-celular
npm run test:instagram
```

O comando sem slug gera a série inteira. O slug pode ser informado com ou sem o prefixo numérico da pasta.

## Criando um conteúdo com peças existentes

Inclua o conteúdo em `content/series.json` e escolha um template. O template `headline-visual` aceita conteúdo configurável:

```json
{
  "slug": "11-presenca-digital",
  "title": "Presença digital",
  "slides": [
    {
      "file": "imagem",
      "template": "headline-visual",
      "data": {
        "badgeLabel": "PRESENÇA DIGITAL",
        "title": ["Seu negócio", "merece destaque."],
        "description": ["Conteúdo claro, visual profissional", "e um próximo passo visível."],
        "visual": "browser",
        "cta": "FALE COM A GENTE",
        "theme": "dark"
      }
    }
  ]
}
```

Os valores disponíveis para `visual` são `browser` e `phone`. Novos componentes podem ser adicionados em `components.mjs` sem duplicar a identidade visual ou a lógica de exportação.

## Dependências externas

- Node.js 18 ou superior.
- ImageMagick, com o comando `magick` ou `convert` disponível no terminal.
