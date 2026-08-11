import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const here = path.dirname(fileURLToPath(import.meta.url));
const postsRoot = path.join(here, 'posts');
const logo = await readFile(path.join(here, '..', 'assets', 'oliveira-sites-icon.svg'), 'utf8');
const logoData = `data:image/svg+xml;base64,${Buffer.from(logo).toString('base64')}`;

const C = {
  ink: '#10231A',
  deep: '#183426',
  green: '#567A35',
  lime: '#B9E769',
  mint: '#DDF4C7',
  cream: '#F7F4EA',
  white: '#FFFFFF',
  cyan: '#67D7D0',
  orange: '#FF9566',
  yellow: '#FFD66B',
  muted: '#A9B7AE',
  line: '#D7DED6'
};

const esc = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

function textLines(x, y, lines, { size = 48, fill = C.ink, weight = 700, gap = 1.12, anchor = 'start', opacity = 1 } = {}) {
  return `<text x="${x}" y="${y}" font-family="DejaVu Sans, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" opacity="${opacity}">${lines.map((line, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : size * gap}">${esc(line)}</tspan>`).join('')}</text>`;
}

function brandHeader(theme = 'dark', kicker = 'OLIVEIRA SITES') {
  const fill = theme === 'dark' ? C.white : C.ink;
  return `
    <image href="${logoData}" x="72" y="66" width="64" height="64"/>
    <text x="154" y="105" font-family="DejaVu Sans, sans-serif" font-size="24" font-weight="700" fill="${fill}">${esc(kicker)}</text>
    <circle cx="1000" cy="98" r="5" fill="${C.lime}"/>
    <circle cx="978" cy="98" r="5" fill="${theme === 'dark' ? C.cyan : C.green}" opacity=".75"/>
    <circle cx="956" cy="98" r="5" fill="${fill}" opacity=".25"/>`;
}

function footer(theme = 'dark', label = '@oliveira.sites.tech') {
  const fill = theme === 'dark' ? C.white : C.ink;
  return `<text x="72" y="1292" font-family="DejaVu Sans, sans-serif" font-size="20" font-weight="600" fill="${fill}" opacity=".78">${esc(label)}</text>
  <rect x="910" y="1274" width="98" height="4" rx="2" fill="${C.lime}"/>`;
}

function defs() {
  return `<defs>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#07120D" flood-opacity=".20"/></filter>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="55"/></filter>
    <linearGradient id="darkGrad" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0C2117"/><stop offset="1" stop-color="#244B35"/></linearGradient>
    <linearGradient id="limeGrad" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#D8FF85"/><stop offset="1" stop-color="#8CCB58"/></linearGradient>
    <pattern id="grid" width="54" height="54" patternUnits="userSpaceOnUse"><path d="M54 0H0V54" fill="none" stroke="#FFFFFF" stroke-opacity=".055" stroke-width="1"/></pattern>
  </defs>`;
}

function canvas({ background = C.cream, theme = 'light', body, kicker, footerLabel }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
    ${defs()}
    <rect width="1080" height="1350" fill="${background}"/>
    ${background === 'url(#darkGrad)' || theme === 'dark' ? '<rect width="1080" height="1350" fill="url(#grid)"/>' : ''}
    ${brandHeader(theme, kicker)}
    ${body}
    ${footer(theme, footerLabel)}
  </svg>`;
}

function browserWindow(x, y, w, h, { dark = false, accent = C.lime } = {}) {
  const bg = dark ? C.deep : C.white;
  const fg = dark ? C.white : C.ink;
  return `<g filter="url(#shadow)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="28" fill="${bg}"/>
    <rect x="${x}" y="${y}" width="${w}" height="64" rx="28" fill="${dark ? '#0E241A' : '#EEF0E9'}"/>
    <circle cx="${x + 28}" cy="${y + 32}" r="7" fill="${C.orange}"/><circle cx="${x + 51}" cy="${y + 32}" r="7" fill="${C.yellow}"/><circle cx="${x + 74}" cy="${y + 32}" r="7" fill="${C.cyan}"/>
    <rect x="${x + 112}" y="${y + 18}" width="${w - 142}" height="28" rx="14" fill="${dark ? '#274536' : '#FFFFFF'}"/>
    <rect x="${x + 34}" y="${y + 103}" width="${w * .46}" height="16" rx="8" fill="${fg}" opacity=".88"/>
    <rect x="${x + 34}" y="${y + 139}" width="${w * .34}" height="10" rx="5" fill="${fg}" opacity=".28"/>
    <rect x="${x + 34}" y="${y + 161}" width="${w * .4}" height="10" rx="5" fill="${fg}" opacity=".18"/>
    <rect x="${x + 34}" y="${y + 203}" width="${w * .26}" height="44" rx="22" fill="${accent}"/>
    <rect x="${x + w * .59}" y="${y + 95}" width="${w * .32}" height="${h - 132}" rx="22" fill="${accent}" opacity=".22"/>
    <circle cx="${x + w * .75}" cy="${y + h * .53}" r="${Math.min(w,h) * .1}" fill="${accent}" opacity=".7"/>
  </g>`;
}

function phone(x, y, w, h, screenBody = '') {
  return `<g filter="url(#shadow)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="52" fill="#0B1711"/>
    <rect x="${x + 12}" y="${y + 12}" width="${w - 24}" height="${h - 24}" rx="42" fill="${C.white}"/>
    <rect x="${x + w * .36}" y="${y + 22}" width="${w * .28}" height="9" rx="4.5" fill="#0B1711"/>
    ${screenBody}
  </g>`;
}

function mobilePost() {
  const screen = `
    <rect x="568" y="418" width="258" height="170" rx="26" fill="${C.deep}"/>
    <rect x="594" y="455" width="152" height="16" rx="8" fill="${C.white}"/>
    <rect x="594" y="490" width="104" height="9" rx="4.5" fill="${C.white}" opacity=".42"/>
    <rect x="594" y="526" width="116" height="38" rx="19" fill="${C.lime}"/>
    <rect x="568" y="612" width="120" height="120" rx="25" fill="${C.mint}"/>
    <rect x="706" y="612" width="120" height="120" rx="25" fill="${C.cyan}" opacity=".28"/>
    <rect x="568" y="752" width="258" height="84" rx="24" fill="#F0F2EC"/>
    <rect x="590" y="776" width="170" height="10" rx="5" fill="${C.ink}" opacity=".25"/>
    <rect x="590" y="802" width="110" height="10" rx="5" fill="${C.ink}" opacity=".14"/>`;
  const body = `
    <circle cx="870" cy="295" r="265" fill="${C.lime}" opacity=".14"/>
    <rect x="72" y="190" width="240" height="42" rx="21" fill="${C.mint}"/><text x="192" y="219" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="700" fill="${C.green}">EXPERIÊNCIA MOBILE</text>
    ${textLines(72, 315, ['Seu site passa', 'no teste do', 'celular?'], { size: 70, weight: 800 })}
    ${textLines(72, 585, ['O Google indexa a web pensando', 'primeiro na versão móvel.', 'Seu cliente também não espera.'], { size: 27, weight: 400, gap: 1.48, fill: '#405348' })}
    ${phone(540, 365, 315, 600, screen)}
    <g transform="translate(812 485)"><circle r="92" fill="${C.lime}"/><path d="M-30 4l20 20 43-49" fill="none" stroke="${C.ink}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/><text x="0" y="129" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="700" fill="${C.ink}">RESPONSIVO</text></g>
    <g transform="translate(95 870)"><rect width="350" height="112" rx="25" fill="${C.white}" filter="url(#shadow)"/><circle cx="58" cy="56" r="28" fill="${C.cyan}" opacity=".45"/><path d="M51 56h15M58 49v15" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/><text x="106" y="49" font-family="DejaVu Sans" font-size="21" font-weight="700" fill="${C.ink}">Botões fáceis</text><text x="106" y="78" font-family="DejaVu Sans" font-size="18" fill="#56665D">de tocar e entender</text></g>
    <g transform="translate(95 1008)"><rect width="350" height="112" rx="25" fill="${C.white}" filter="url(#shadow)"/><circle cx="58" cy="56" r="28" fill="${C.orange}" opacity=".38"/><path d="M44 63h28M49 53h18M54 43h8" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/><text x="106" y="49" font-family="DejaVu Sans" font-size="21" font-weight="700" fill="${C.ink}">Conteúdo rápido</text><text x="106" y="78" font-family="DejaVu Sans" font-size="18" fill="#56665D">sem zoom ou espera</text></g>
    <rect x="548" y="1027" width="360" height="92" rx="46" fill="${C.deep}"/><text x="728" y="1084" text-anchor="middle" font-family="DejaVu Sans" font-size="23" font-weight="700" fill="${C.white}">SITE BOM CABE NO BOLSO</text>`;
  return canvas({ background: C.cream, theme: 'light', body, kicker: 'OLIVEIRA SITES · 04' });
}

function landingSlide1() {
  const body = `
    <circle cx="890" cy="340" r="310" fill="${C.cyan}" opacity=".10"/>
    <rect x="72" y="190" width="205" height="42" rx="21" fill="${C.lime}"/><text x="174" y="219" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="${C.ink}">TRÁFEGO PAGO</text>
    ${textLines(72, 330, ['Anúncio bom.', 'Página ruim.', 'Clique perdido.'], { size: 68, fill: C.white, weight: 800 })}
    ${textLines(72, 585, ['A promessa do anúncio precisa', 'continuar na página de destino.'], { size: 27, fill: C.white, weight: 400, gap: 1.45, opacity: .78 })}
    <g transform="translate(82 760)"><rect width="380" height="270" rx="28" fill="${C.white}"/><rect x="26" y="25" width="92" height="30" rx="15" fill="${C.mint}"/><text x="72" y="46" text-anchor="middle" font-family="DejaVu Sans" font-size="14" font-weight="700" fill="${C.green}">ANÚNCIO</text><text x="28" y="107" font-family="DejaVu Sans" font-size="26" font-weight="800" fill="${C.ink}">Orçamento rápido</text><text x="28" y="146" font-family="DejaVu Sans" font-size="18" fill="#53635A">Clique e fale com a equipe.</text><rect x="28" y="185" width="190" height="48" rx="24" fill="${C.deep}"/><text x="123" y="216" text-anchor="middle" font-family="DejaVu Sans" font-size="17" font-weight="700" fill="white">PEDIR ORÇAMENTO</text></g>
    <path d="M480 895h95" stroke="${C.lime}" stroke-width="10" stroke-linecap="round"/><path d="M560 870l30 25-30 25" fill="none" stroke="${C.lime}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <g transform="translate(610 750) rotate(3 175 150)"><rect width="350" height="310" rx="28" fill="#E7E9E4"/><rect x="26" y="28" width="298" height="32" rx="16" fill="#D0D4CD"/><rect x="28" y="100" width="210" height="17" rx="8" fill="#9DA8A1"/><rect x="28" y="142" width="265" height="11" rx="5" fill="#BCC3BD"/><rect x="28" y="168" width="250" height="11" rx="5" fill="#BCC3BD"/><g transform="translate(280 255)"><circle r="54" fill="${C.orange}"/><path d="M-18-18l36 36m0-36l-36 36" stroke="white" stroke-width="10" stroke-linecap="round"/></g></g>
    <text x="540" y="1142" text-anchor="middle" font-family="DejaVu Sans" font-size="22" font-weight="700" fill="${C.lime}">DESLIZE PARA ENTENDER O CAMINHO CERTO →</text>`;
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body, kicker: 'OLIVEIRA SITES · CARROSSEL 05', footerLabel: '01 / 05' });
}

function landingSlide2() {
  const body = `
    ${textLines(72, 245, ['1. Continue a', 'mesma promessa'], { size: 64, weight: 800 })}
    ${textLines(72, 430, ['Se o anúncio fala em orçamento rápido,', 'a página precisa abrir falando disso.'], { size: 26, weight: 400, gap: 1.5, fill: '#516259' })}
    <g transform="translate(80 610)"><rect width="330" height="300" rx="32" fill="${C.deep}" filter="url(#shadow)"/><rect x="26" y="26" width="95" height="32" rx="16" fill="${C.lime}"/><text x="74" y="48" text-anchor="middle" font-family="DejaVu Sans" font-size="14" font-weight="800" fill="${C.ink}">ANÚNCIO</text><text x="28" y="122" font-family="DejaVu Sans" font-size="27" font-weight="800" fill="white">Orçamento</text><text x="28" y="160" font-family="DejaVu Sans" font-size="27" font-weight="800" fill="${C.lime}">em poucos cliques</text><rect x="28" y="214" width="190" height="48" rx="24" fill="white" opacity=".12"/></g>
    <path d="M435 760h140" stroke="${C.green}" stroke-width="9" stroke-linecap="round"/><path d="M555 735l30 25-30 25" fill="none" stroke="${C.green}" stroke-width="9" stroke-linejoin="round"/>
    ${browserWindow(610, 570, 370, 410, { dark: false, accent: C.lime })}
    <rect x="642" y="680" width="250" height="20" rx="10" fill="${C.ink}"/><text x="642" y="744" font-family="DejaVu Sans" font-size="24" font-weight="800" fill="${C.ink}">Peça seu orçamento</text><rect x="642" y="780" width="205" height="55" rx="27" fill="${C.green}"/><text x="744" y="815" text-anchor="middle" font-family="DejaVu Sans" font-size="17" font-weight="700" fill="white">FALAR AGORA</text>
    <g transform="translate(210 1060)"><rect width="660" height="88" rx="44" fill="${C.mint}"/><text x="330" y="55" text-anchor="middle" font-family="DejaVu Sans" font-size="23" font-weight="800" fill="${C.green}">ANÚNCIO E PÁGINA PRECISAM CONVERSAR</text></g>`;
  return canvas({ background: C.cream, theme: 'light', body, kicker: 'LANDING PAGE QUE CONVERTE', footerLabel: '02 / 05' });
}

function landingSlide3() {
  const body = `
    ${textLines(72, 245, ['2. Uma página,', 'um objetivo'], { size: 64, weight: 800, fill: C.white })}
    ${textLines(72, 425, ['Menos caminhos paralelos.', 'Mais clareza para agir.'], { size: 27, fill: C.white, weight: 400, gap: 1.5, opacity: .78 })}
    <g transform="translate(100 600)">
      <circle cx="440" cy="260" r="250" fill="${C.lime}" opacity=".09"/>
      <g opacity=".32"><rect x="0" y="40" width="200" height="100" rx="24" fill="white"/><text x="100" y="100" text-anchor="middle" font-family="DejaVu Sans" font-size="20" font-weight="700" fill="${C.ink}">MENU</text><rect x="0" y="380" width="200" height="100" rx="24" fill="white"/><text x="100" y="440" text-anchor="middle" font-family="DejaVu Sans" font-size="20" font-weight="700" fill="${C.ink}">OUTROS LINKS</text><rect x="680" y="40" width="200" height="100" rx="24" fill="white"/><text x="780" y="100" text-anchor="middle" font-family="DejaVu Sans" font-size="20" font-weight="700" fill="${C.ink}">NOTÍCIAS</text><rect x="680" y="380" width="200" height="100" rx="24" fill="white"/><text x="780" y="440" text-anchor="middle" font-family="DejaVu Sans" font-size="20" font-weight="700" fill="${C.ink}">DISTRAÇÕES</text></g>
      <path d="M220 90h150M220 430h150M660 90H510M660 430H510" stroke="${C.muted}" stroke-width="5" stroke-dasharray="12 12"/>
      <rect x="320" y="160" width="280" height="205" rx="40" fill="${C.lime}" filter="url(#shadow)"/>
      <circle cx="460" cy="220" r="28" fill="${C.ink}"/><path d="M447 220l10 10 20-24" fill="none" stroke="${C.lime}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="460" y="285" text-anchor="middle" font-family="DejaVu Sans" font-size="24" font-weight="800" fill="${C.ink}">FALAR NO WHATSAPP</text><text x="460" y="320" text-anchor="middle" font-family="DejaVu Sans" font-size="17" fill="${C.ink}">ação principal</text>
    </g>`;
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body, kicker: 'LANDING PAGE QUE CONVERTE', footerLabel: '03 / 05' });
}

function landingSlide4() {
  const body = `
    ${textLines(72, 245, ['3. Rápida e', 'perfeita no celular'], { size: 62, weight: 800 })}
    ${textLines(72, 425, ['A melhor campanha não corrige uma', 'experiência lenta ou confusa.'], { size: 27, weight: 400, gap: 1.5, fill: '#516259' })}
    ${phone(145, 600, 300, 525, `<rect x="175" y="680" width="240" height="150" rx="25" fill="${C.deep}"/><rect x="200" y="720" width="160" height="15" rx="7" fill="white"/><rect x="200" y="756" width="115" height="9" rx="4" fill="white" opacity=".4"/><rect x="200" y="785" width="126" height="36" rx="18" fill="${C.lime}"/><rect x="175" y="852" width="112" height="112" rx="24" fill="${C.mint}"/><rect x="303" y="852" width="112" height="112" rx="24" fill="${C.cyan}" opacity=".25"/>`)}
    <g transform="translate(560 610)"><circle cx="190" cy="190" r="190" fill="${C.white}" filter="url(#shadow)"/><path d="M65 222a135 135 0 01250 0" fill="none" stroke="#E2E6E1" stroke-width="32" stroke-linecap="round"/><path d="M65 222a135 135 0 01197-111" fill="none" stroke="${C.lime}" stroke-width="32" stroke-linecap="round"/><path d="M190 220l76-92" stroke="${C.ink}" stroke-width="12" stroke-linecap="round"/><circle cx="190" cy="220" r="23" fill="${C.ink}"/><text x="190" y="305" text-anchor="middle" font-family="DejaVu Sans" font-size="24" font-weight="800" fill="${C.ink}">CARREGAMENTO</text><text x="190" y="338" text-anchor="middle" font-family="DejaVu Sans" font-size="18" fill="#52625A">rápido e estável</text></g>
    <rect x="545" y="1040" width="410" height="82" rx="41" fill="${C.deep}"/><text x="750" y="1091" text-anchor="middle" font-family="DejaVu Sans" font-size="22" font-weight="800" fill="white">CLIQUE SEM FRICÇÃO</text>`;
  return canvas({ background: C.cream, theme: 'light', body, kicker: 'LANDING PAGE QUE CONVERTE', footerLabel: '04 / 05' });
}

function landingSlide5() {
  const body = `
    <circle cx="845" cy="520" r="380" fill="${C.lime}" opacity=".12"/>
    ${textLines(72, 260, ['Transforme', 'cliques em', 'conversas.'], { size: 74, weight: 800, fill: C.white })}
    ${textLines(72, 535, ['Landing page profissional, responsiva', 'e conectada ao seu WhatsApp.'], { size: 27, fill: C.white, weight: 400, gap: 1.5, opacity: .78 })}
    <g transform="translate(590 280)">${browserWindow(0, 0, 390, 500, { dark: false, accent: C.lime })}</g>
    <g transform="translate(72 760)"><rect width="936" height="345" rx="48" fill="${C.white}" filter="url(#shadow)"/><text x="54" y="75" font-family="DejaVu Sans" font-size="19" font-weight="800" fill="${C.green}">PROMOÇÃO DE LANÇAMENTO</text><text x="54" y="145" font-family="DejaVu Sans" font-size="31" font-weight="700" fill="${C.ink}" text-decoration="line-through" opacity=".45">R$ 600</text><text x="54" y="255" font-family="DejaVu Sans" font-size="92" font-weight="800" fill="${C.ink}">R$ 400</text><rect x="500" y="105" width="370" height="95" rx="47" fill="${C.lime}"/><text x="685" y="164" text-anchor="middle" font-family="DejaVu Sans" font-size="25" font-weight="800" fill="${C.ink}">FALE COM A GENTE</text><text x="500" y="255" font-family="DejaVu Sans" font-size="20" font-weight="700" fill="${C.ink}">Domínio + hospedagem inclusos</text><text x="500" y="293" font-family="DejaVu Sans" font-size="20" fill="#506158">Pagamento após aprovação</text></g>`;
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body, kicker: 'OLIVEIRA SITES · CARROSSEL 05', footerLabel: '05 / 05' });
}

function seoPost() {
  const body = `
    <rect x="72" y="190" width="145" height="42" rx="21" fill="${C.mint}"/><text x="145" y="219" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="${C.green}">SEO BÁSICO</text>
    ${textLines(72, 330, ['O Google precisa', 'entender o que', 'você oferece.'], { size: 66, weight: 800 })}
    ${textLines(72, 585, ['Clareza ajuda pessoas e buscadores', 'a encontrarem a resposta certa.'], { size: 26, weight: 400, gap: 1.5, fill: '#516259' })}
    <g transform="translate(95 760)" filter="url(#shadow)"><rect width="890" height="390" rx="42" fill="white"/><rect x="48" y="44" width="794" height="70" rx="35" fill="#F1F3EF"/><circle cx="88" cy="79" r="18" fill="none" stroke="${C.green}" stroke-width="6"/><path d="M101 92l16 16" stroke="${C.green}" stroke-width="6" stroke-linecap="round"/><text x="145" y="89" font-family="DejaVu Sans" font-size="23" font-weight="600" fill="${C.ink}">site profissional para meu negócio</text>
      <g transform="translate(50 155)"><circle cx="24" cy="24" r="24" fill="${C.lime}"/><text x="24" y="31" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="${C.ink}">1</text><text x="68" y="21" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="${C.ink}">Título claro</text><text x="68" y="50" font-family="DejaVu Sans" font-size="17" fill="#66736C">Diga o serviço e para quem ele é.</text></g>
      <g transform="translate(50 235)"><circle cx="24" cy="24" r="24" fill="${C.cyan}" opacity=".55"/><text x="24" y="31" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="${C.ink}">2</text><text x="68" y="21" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="${C.ink}">Conteúdo útil</text><text x="68" y="50" font-family="DejaVu Sans" font-size="17" fill="#66736C">Responda às dúvidas reais do cliente.</text></g>
      <g transform="translate(490 155)"><circle cx="24" cy="24" r="24" fill="${C.orange}" opacity=".50"/><text x="24" y="31" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="${C.ink}">3</text><text x="68" y="21" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="${C.ink}">Localização</text><text x="68" y="50" font-family="DejaVu Sans" font-size="17" fill="#66736C">Mostre onde e como você atende.</text></g>
      <g transform="translate(490 235)"><circle cx="24" cy="24" r="24" fill="${C.yellow}" opacity=".75"/><text x="24" y="31" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="${C.ink}">4</text><text x="68" y="21" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="${C.ink}">Estrutura técnica</text><text x="68" y="50" font-family="DejaVu Sans" font-size="17" fill="#66736C">Site rápido, seguro e acessível.</text></g>
    </g>`;
  return canvas({ background: C.cream, theme: 'light', body, kicker: 'OLIVEIRA SITES · 06' });
}

function socialSitePost() {
  const body = `
    ${textLines(72, 270, ['Instagram atrai.', 'Seu site organiza', 'e converte.'], { size: 67, weight: 800, fill: C.white })}
    ${textLines(72, 540, ['Não é uma disputa.', 'É uma parceria de canais.'], { size: 27, fill: C.white, weight: 400, gap: 1.5, opacity: .78 })}
    <g transform="translate(70 720)"><rect width="390" height="410" rx="44" fill="#F9F7F0" filter="url(#shadow)"/><rect x="32" y="32" width="326" height="55" rx="27" fill="#ECEDE8"/><circle cx="67" cy="59" r="18" fill="${C.orange}"/><rect x="100" y="50" width="120" height="14" rx="7" fill="${C.ink}" opacity=".7"/><rect x="32" y="115" width="326" height="190" rx="26" fill="${C.cyan}" opacity=".25"/><path d="M80 270l72-72 62 52 62-92 55 112" fill="none" stroke="${C.deep}" stroke-width="9" stroke-linejoin="round"/><circle cx="295" cy="155" r="31" fill="${C.yellow}"/><circle cx="60" cy="350" r="15" fill="none" stroke="${C.ink}" stroke-width="4"/><path d="M90 342h120M90 364h80" stroke="${C.ink}" stroke-width="9" stroke-linecap="round" opacity=".25"/><text x="195" y="455" text-anchor="middle" font-family="DejaVu Sans" font-size="21" font-weight="800" fill="white">ATENÇÃO</text></g>
    <path d="M470 920h125" stroke="${C.lime}" stroke-width="10" stroke-linecap="round"/><path d="M575 895l30 25-30 25" fill="none" stroke="${C.lime}" stroke-width="10" stroke-linejoin="round"/>
    <g transform="translate(620 720)">${browserWindow(0, 0, 390, 410, { dark: false, accent: C.lime })}<text x="195" y="455" text-anchor="middle" font-family="DejaVu Sans" font-size="21" font-weight="800" fill="white">DECISÃO</text></g>`;
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body, kicker: 'OLIVEIRA SITES · 07' });
}

function accessibilityPost() {
  const body = `
    <rect x="72" y="190" width="195" height="42" rx="21" fill="${C.mint}"/><text x="170" y="219" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="${C.green}">ACESSIBILIDADE</text>
    ${textLines(72, 330, ['Um site melhor', 'para mais pessoas.'], { size: 68, weight: 800 })}
    ${textLines(72, 505, ['Acessibilidade melhora a experiência', 'em diferentes telas e situações.'], { size: 26, weight: 400, gap: 1.5, fill: '#516259' })}
    <g transform="translate(72 665)">
      <rect width="936" height="480" rx="48" fill="${C.deep}" filter="url(#shadow)"/>
      <g transform="translate(55 55)"><rect width="250" height="150" rx="28" fill="white" opacity=".09"/><circle cx="55" cy="52" r="25" fill="${C.lime}"/><text x="55" y="62" text-anchor="middle" font-family="DejaVu Sans" font-size="29" font-weight="800" fill="${C.ink}">A</text><text x="35" y="112" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="white">Texto legível</text><text x="35" y="138" font-family="DejaVu Sans" font-size="15" fill="white" opacity=".62">tamanho e espaçamento</text></g>
      <g transform="translate(343 55)"><rect width="250" height="150" rx="28" fill="white" opacity=".09"/><circle cx="55" cy="52" r="25" fill="${C.cyan}"/><circle cx="47" cy="52" r="8" fill="${C.ink}"/><circle cx="64" cy="52" r="8" fill="white"/><text x="35" y="112" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="white">Bom contraste</text><text x="35" y="138" font-family="DejaVu Sans" font-size="15" fill="white" opacity=".62">conteúdo visível</text></g>
      <g transform="translate(631 55)"><rect width="250" height="150" rx="28" fill="white" opacity=".09"/><rect x="30" y="28" width="55" height="45" rx="8" fill="none" stroke="${C.yellow}" stroke-width="5"/><path d="M45 50h25" stroke="${C.yellow}" stroke-width="5"/><text x="35" y="112" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="white">Foco visível</text><text x="35" y="138" font-family="DejaVu Sans" font-size="15" fill="white" opacity=".62">teclado e navegação</text></g>
      <g transform="translate(55 245)"><rect width="395" height="165" rx="30" fill="${C.lime}"/><path d="M35 48h80M35 78h120M35 108h95" stroke="${C.ink}" stroke-width="10" stroke-linecap="round"/><text x="170" y="67" font-family="DejaVu Sans" font-size="22" font-weight="800" fill="${C.ink}">Texto alternativo</text><text x="170" y="101" font-family="DejaVu Sans" font-size="17" fill="${C.ink}">contexto além do visual</text></g>
      <g transform="translate(486 245)"><rect width="395" height="165" rx="30" fill="white" opacity=".09"/><rect x="35" y="45" width="85" height="54" rx="12" fill="${C.orange}"/><text x="78" y="80" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="${C.ink}">CC</text><text x="155" y="70" font-family="DejaVu Sans" font-size="22" font-weight="800" fill="white">Conteúdo claro</text><text x="155" y="103" font-family="DejaVu Sans" font-size="17" fill="white" opacity=".65">sem barreiras desnecessárias</text></g>
    </g>`;
  return canvas({ background: C.cream, theme: 'light', body, kicker: 'OLIVEIRA SITES · 08' });
}

function securityPost() {
  const body = `
    <circle cx="830" cy="425" r="350" fill="${C.cyan}" opacity=".10"/>
    ${textLines(72, 285, ['O cadeado não é', 'só um detalhe.'], { size: 70, weight: 800, fill: C.white })}
    ${textLines(72, 485, ['HTTPS protege a conexão e evita', 'o aviso de página não segura.'], { size: 27, fill: C.white, weight: 400, gap: 1.5, opacity: .78 })}
    <g transform="translate(90 690)">${browserWindow(0, 0, 900, 385, { dark: true, accent: C.lime })}
      <g transform="translate(355 75)"><path d="M95 20l90 34v70c0 78-44 127-90 151-46-24-90-73-90-151V54z" fill="${C.lime}" filter="url(#shadow)"/><rect x="59" y="113" width="72" height="68" rx="15" fill="${C.ink}"/><path d="M74 112V87a21 21 0 0142 0v25" fill="none" stroke="${C.ink}" stroke-width="12" stroke-linecap="round"/><circle cx="95" cy="143" r="8" fill="${C.lime}"/><path d="M95 151v15" stroke="${C.lime}" stroke-width="6" stroke-linecap="round"/></g>
      <rect x="150" y="315" width="600" height="42" rx="21" fill="white" opacity=".09"/><text x="450" y="343" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="700" fill="white">https://seunegocio.com.br</text>
    </g>
    <rect x="275" y="1132" width="530" height="74" rx="37" fill="${C.lime}"/><text x="540" y="1179" text-anchor="middle" font-family="DejaVu Sans" font-size="22" font-weight="800" fill="${C.ink}">CONEXÃO SEGURA. MAIS CONFIANÇA.</text>`;
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body, kicker: 'OLIVEIRA SITES · 09' });
}

function conversionPost() {
  const body = `
    <rect x="72" y="190" width="188" height="42" rx="21" fill="${C.mint}"/><text x="166" y="219" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="${C.green}">CONVERSÃO</text>
    ${textLines(72, 330, ['Seu site conduz', 'ou só informa?'], { size: 68, weight: 800 })}
    ${textLines(72, 505, ['Uma boa página mostra o próximo passo', 'sem obrigar o cliente a procurar.'], { size: 26, weight: 400, gap: 1.5, fill: '#516259' })}
    <g transform="translate(95 665)" filter="url(#shadow)"><rect width="890" height="500" rx="44" fill="white"/><rect x="0" y="0" width="890" height="62" rx="44" fill="#EEF0EA"/><circle cx="35" cy="31" r="7" fill="${C.orange}"/><circle cx="58" cy="31" r="7" fill="${C.yellow}"/><circle cx="81" cy="31" r="7" fill="${C.cyan}"/>
      <rect x="35" y="100" width="480" height="150" rx="28" fill="${C.deep}"/><text x="67" y="154" font-family="DejaVu Sans" font-size="26" font-weight="800" fill="white">1. Promessa clara</text><text x="67" y="194" font-family="DejaVu Sans" font-size="17" fill="white" opacity=".65">O que você resolve e para quem.</text><rect x="67" y="212" width="180" height="29" rx="14" fill="${C.lime}"/>
      <rect x="545" y="100" width="310" height="150" rx="28" fill="${C.mint}"/><text x="575" y="154" font-family="DejaVu Sans" font-size="24" font-weight="800" fill="${C.ink}">2. Prova</text><text x="575" y="193" font-family="DejaVu Sans" font-size="17" fill="${C.ink}">fotos, diferenciais</text><text x="575" y="220" font-family="DejaVu Sans" font-size="17" fill="${C.ink}">e depoimentos</text>
      <rect x="35" y="280" width="310" height="150" rx="28" fill="${C.cyan}" opacity=".30"/><text x="65" y="334" font-family="DejaVu Sans" font-size="24" font-weight="800" fill="${C.ink}">3. Respostas</text><text x="65" y="373" font-family="DejaVu Sans" font-size="17" fill="${C.ink}">serviços, prazo, local</text><text x="65" y="400" font-family="DejaVu Sans" font-size="17" fill="${C.ink}">e como funciona</text>
      <rect x="375" y="280" width="480" height="150" rx="28" fill="${C.lime}"/><text x="405" y="334" font-family="DejaVu Sans" font-size="24" font-weight="800" fill="${C.ink}">4. Próximo passo</text><text x="405" y="373" font-family="DejaVu Sans" font-size="17" fill="${C.ink}">Um botão visível para conversar.</text><rect x="405" y="395" width="220" height="34" rx="17" fill="${C.ink}"/><text x="515" y="418" text-anchor="middle" font-family="DejaVu Sans" font-size="14" font-weight="800" fill="white">FALAR NO WHATSAPP</text>
    </g>`;
  return canvas({ background: C.cream, theme: 'light', body, kicker: 'OLIVEIRA SITES · 10' });
}

const artworks = [
  ['04-site-no-celular', 'imagem', mobilePost()],
  ['05-anuncio-e-landing-page', '01-capa', landingSlide1()],
  ['05-anuncio-e-landing-page', '02-mesma-promessa', landingSlide2()],
  ['05-anuncio-e-landing-page', '03-um-objetivo', landingSlide3()],
  ['05-anuncio-e-landing-page', '04-mobile-e-rapida', landingSlide4()],
  ['05-anuncio-e-landing-page', '05-oferta', landingSlide5()],
  ['06-como-o-google-entende-seu-site', 'imagem', seoPost()],
  ['07-instagram-e-site', 'imagem', socialSitePost()],
  ['08-acessibilidade-digital', 'imagem', accessibilityPost()],
  ['09-https-e-confianca', 'imagem', securityPost()],
  ['10-site-que-gera-contatos', 'imagem', conversionPost()]
];

for (const [folder, file, svg] of artworks) {
  const output = path.join(postsRoot, folder);
  await mkdir(output, { recursive: true });
  const svgPath = path.join(output, `${file}.svg`);
  const pngPath = path.join(output, `${file}.png`);
  const jpgPath = path.join(output, `${file}.jpg`);
  await writeFile(svgPath, svg);
  const rendered = new Resvg(svg, { fitTo: { mode: 'width', value: 1080 } }).render();
  await writeFile(pngPath, rendered.asPng());
  execFileSync('convert', [pngPath, '-background', C.cream, '-flatten', '-sampling-factor', '4:2:0', '-quality', '92', jpgPath], { stdio: 'inherit' });
  await rm(pngPath);
}

console.log(`Série gerada: ${artworks.length} artes em ${postsRoot}`);
