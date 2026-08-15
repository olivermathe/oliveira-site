import { C } from './theme.mjs';
import { badge, browserWindow, canvas, phone, textLines } from './components.mjs';


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
  return canvas({ background: C.cream, theme: 'light', body });
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
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body });
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
  return canvas({ background: C.cream, theme: 'light', body });
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
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body });
}

function landingSlide4() {
  const body = `
    ${textLines(72, 245, ['3. Rápida e', 'perfeita no celular'], { size: 62, weight: 800 })}
    ${textLines(72, 425, ['A melhor campanha não corrige uma', 'experiência lenta ou confusa.'], { size: 27, weight: 400, gap: 1.5, fill: '#516259' })}
    ${phone(145, 600, 300, 525, `<rect x="175" y="680" width="240" height="150" rx="25" fill="${C.deep}"/><rect x="200" y="720" width="160" height="15" rx="7" fill="white"/><rect x="200" y="756" width="115" height="9" rx="4" fill="white" opacity=".4"/><rect x="200" y="785" width="126" height="36" rx="18" fill="${C.lime}"/><rect x="175" y="852" width="112" height="112" rx="24" fill="${C.mint}"/><rect x="303" y="852" width="112" height="112" rx="24" fill="${C.cyan}" opacity=".25"/>`)}
    <g transform="translate(560 610)"><circle cx="190" cy="190" r="190" fill="${C.white}" filter="url(#shadow)"/><path d="M65 222a135 135 0 01250 0" fill="none" stroke="#E2E6E1" stroke-width="32" stroke-linecap="round"/><path d="M65 222a135 135 0 01197-111" fill="none" stroke="${C.lime}" stroke-width="32" stroke-linecap="round"/><path d="M190 220l76-92" stroke="${C.ink}" stroke-width="12" stroke-linecap="round"/><circle cx="190" cy="220" r="23" fill="${C.ink}"/><text x="190" y="305" text-anchor="middle" font-family="DejaVu Sans" font-size="24" font-weight="800" fill="${C.ink}">CARREGAMENTO</text><text x="190" y="338" text-anchor="middle" font-family="DejaVu Sans" font-size="18" fill="#52625A">rápido e estável</text></g>
    <rect x="545" y="1040" width="410" height="82" rx="41" fill="${C.deep}"/><text x="750" y="1091" text-anchor="middle" font-family="DejaVu Sans" font-size="22" font-weight="800" fill="white">CLIQUE SEM FRICÇÃO</text>`;
  return canvas({ background: C.cream, theme: 'light', body });
}

function landingSlide5() {
  const body = `
    <circle cx="845" cy="520" r="380" fill="${C.lime}" opacity=".12"/>
    ${textLines(72, 260, ['Transforme', 'cliques em', 'conversas.'], { size: 74, weight: 800, fill: C.white })}
    ${textLines(72, 535, ['Landing page profissional, responsiva', 'e conectada ao seu WhatsApp.'], { size: 27, fill: C.white, weight: 400, gap: 1.5, opacity: .78 })}
    <g transform="translate(590 280)">${browserWindow(0, 0, 390, 500, { dark: false, accent: C.lime })}</g>
    <g transform="translate(72 760)"><rect width="936" height="345" rx="48" fill="${C.white}" filter="url(#shadow)"/><text x="54" y="75" font-family="DejaVu Sans" font-size="19" font-weight="800" fill="${C.green}">PROMOÇÃO DE LANÇAMENTO</text><text x="54" y="145" font-family="DejaVu Sans" font-size="31" font-weight="700" fill="${C.ink}" text-decoration="line-through" opacity=".45">R$ 600</text><text x="54" y="255" font-family="DejaVu Sans" font-size="92" font-weight="800" fill="${C.ink}">R$ 400</text><rect x="500" y="105" width="370" height="95" rx="47" fill="${C.lime}"/><text x="685" y="164" text-anchor="middle" font-family="DejaVu Sans" font-size="25" font-weight="800" fill="${C.ink}">FALE COM A GENTE</text><text x="500" y="255" font-family="DejaVu Sans" font-size="20" font-weight="700" fill="${C.ink}">Domínio + hospedagem inclusos</text><text x="500" y="293" font-family="DejaVu Sans" font-size="20" fill="#506158">Pagamento após aprovação</text></g>`;
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body });
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
  return canvas({ background: C.cream, theme: 'light', body });
}

function socialSitePost() {
  const body = `
    ${textLines(72, 270, ['Instagram atrai.', 'Seu site organiza', 'e converte.'], { size: 67, weight: 800, fill: C.white })}
    ${textLines(72, 540, ['Não é uma disputa.', 'É uma parceria de canais.'], { size: 27, fill: C.white, weight: 400, gap: 1.5, opacity: .78 })}
    <g transform="translate(70 720)"><rect width="390" height="410" rx="44" fill="#F9F7F0" filter="url(#shadow)"/><rect x="32" y="32" width="326" height="55" rx="27" fill="#ECEDE8"/><circle cx="67" cy="59" r="18" fill="${C.orange}"/><rect x="100" y="50" width="120" height="14" rx="7" fill="${C.ink}" opacity=".7"/><rect x="32" y="115" width="326" height="190" rx="26" fill="${C.cyan}" opacity=".25"/><path d="M80 270l72-72 62 52 62-92 55 112" fill="none" stroke="${C.deep}" stroke-width="9" stroke-linejoin="round"/><circle cx="295" cy="155" r="31" fill="${C.yellow}"/><circle cx="60" cy="350" r="15" fill="none" stroke="${C.ink}" stroke-width="4"/><path d="M90 342h120M90 364h80" stroke="${C.ink}" stroke-width="9" stroke-linecap="round" opacity=".25"/><text x="195" y="455" text-anchor="middle" font-family="DejaVu Sans" font-size="21" font-weight="800" fill="white">ATENÇÃO</text></g>
    <path d="M470 920h125" stroke="${C.lime}" stroke-width="10" stroke-linecap="round"/><path d="M575 895l30 25-30 25" fill="none" stroke="${C.lime}" stroke-width="10" stroke-linejoin="round"/>
    <g transform="translate(620 720)">${browserWindow(0, 0, 390, 410, { dark: false, accent: C.lime })}<text x="195" y="455" text-anchor="middle" font-family="DejaVu Sans" font-size="21" font-weight="800" fill="white">DECISÃO</text></g>`;
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body });
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
  return canvas({ background: C.cream, theme: 'light', body });
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
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body });
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
  return canvas({ background: C.cream, theme: 'light', body });
}

function measurementDashboardPost() {
  const body = `
    ${badge(72, 190, 'MENSURAÇÃO', { fill: C.lime, color: C.ink })}
    ${textLines(72, 330, ['Seu site gera visitas.', 'Mas gera ações?'], { size: 67, weight: 800, fill: C.white })}
    ${textLines(72, 505, ['Meça os passos que aproximam', 'uma pessoa do seu negócio.'], { size: 27, weight: 400, gap: 1.5, fill: C.white, opacity: .78 })}
    <g transform="translate(72 680)" filter="url(#shadow)">
      <rect width="936" height="470" rx="46" fill="#F9F8F2"/>
      <rect x="0" y="0" width="936" height="70" rx="46" fill="#E9EEE8"/>
      <circle cx="38" cy="35" r="7" fill="${C.orange}"/><circle cx="62" cy="35" r="7" fill="${C.yellow}"/><circle cx="86" cy="35" r="7" fill="${C.cyan}"/>
      <text x="124" y="43" font-family="DejaVu Sans" font-size="18" font-weight="700" fill="${C.ink}">AÇÕES IMPORTANTES</text>
      <g transform="translate(46 112)">
        <rect width="250" height="122" rx="27" fill="${C.deep}"/>
        <circle cx="55" cy="61" r="28" fill="${C.cyan}" opacity=".42"/>
        <path d="M42 62h26M55 49v26" stroke="white" stroke-width="6" stroke-linecap="round"/>
        <text x="102" y="54" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="white">VISITA</text>
        <text x="102" y="82" font-family="DejaVu Sans" font-size="15" fill="white" opacity=".65">chegou ao site</text>
      </g>
      <path d="M315 173h55" stroke="${C.green}" stroke-width="7" stroke-linecap="round"/><path d="M355 157l20 16-20 16" fill="none" stroke="${C.green}" stroke-width="7" stroke-linejoin="round"/>
      <g transform="translate(389 112)">
        <rect width="250" height="122" rx="27" fill="${C.mint}"/>
        <circle cx="55" cy="61" r="28" fill="${C.lime}"/>
        <path d="M46 49l24 13-24 13z" fill="${C.ink}"/>
        <text x="102" y="54" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="${C.ink}">INTERAÇÃO</text>
        <text x="102" y="82" font-family="DejaVu Sans" font-size="15" fill="${C.ink}" opacity=".65">clicou ou enviou</text>
      </g>
      <path d="M658 173h55" stroke="${C.green}" stroke-width="7" stroke-linecap="round"/><path d="M698 157l20 16-20 16" fill="none" stroke="${C.green}" stroke-width="7" stroke-linejoin="round"/>
      <g transform="translate(732 112)">
        <rect width="158" height="122" rx="27" fill="${C.lime}"/>
        <circle cx="79" cy="48" r="25" fill="${C.ink}"/>
        <path d="M68 48l8 8 16-19" fill="none" stroke="${C.lime}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="79" y="96" text-anchor="middle" font-family="DejaVu Sans" font-size="17" font-weight="800" fill="${C.ink}">RESULTADO</text>
      </g>
      <g transform="translate(46 280)">
        <rect width="844" height="135" rx="29" fill="${C.deep}"/>
        <path d="M36 91C122 74 152 98 232 59s128 17 207-11 124 31 204-4 118-19 165-30" fill="none" stroke="${C.lime}" stroke-width="8" stroke-linecap="round"/>
        <circle cx="232" cy="59" r="8" fill="${C.lime}"/><circle cx="439" cy="48" r="8" fill="${C.lime}"/><circle cx="643" cy="44" r="8" fill="${C.lime}"/>
        <text x="36" y="38" font-family="DejaVu Sans" font-size="17" font-weight="700" fill="white">ENTENDA O CAMINHO, NÃO SÓ O ACESSO</text>
      </g>
    </g>`;
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body });
}

function localInformationPost() {
  const body = `
    ${badge(72, 190, 'PRESENÇA LOCAL')}
    ${textLines(72, 330, ['Seu cliente encontra', 'as informações certas?'], { size: 65, weight: 800 })}
    ${textLines(72, 505, ['Site e perfil comercial devem contar', 'a mesma história — sem desencontros.'], { size: 26, weight: 400, gap: 1.5, fill: '#516259' })}
    <g transform="translate(72 665)">
      <path d="M55 86C175 26 280 154 392 91S599 22 720 93s116 164 186 211" fill="none" stroke="${C.line}" stroke-width="22" stroke-linecap="round"/>
      <path d="M8 320c132-78 244 35 342-16s190-24 285 41 181 40 286-14" fill="none" stroke="${C.mint}" stroke-width="38" stroke-linecap="round"/>
      <g transform="translate(48 80)" filter="url(#shadow)">
        <rect width="430" height="410" rx="40" fill="white"/>
        <rect x="30" y="30" width="370" height="58" rx="29" fill="#F0F2ED"/>
        <circle cx="65" cy="59" r="14" fill="none" stroke="${C.green}" stroke-width="5"/><path d="M75 69l12 12" stroke="${C.green}" stroke-width="5" stroke-linecap="round"/>
        <text x="107" y="66" font-family="DejaVu Sans" font-size="17" font-weight="700" fill="${C.ink}">seu serviço perto de mim</text>
        <circle cx="74" cy="149" r="34" fill="${C.lime}"/>
        <path d="M74 125c-16 0-28 12-28 28 0 21 28 48 28 48s28-27 28-48c0-16-12-28-28-28zm0 38a11 11 0 110-22 11 11 0 010 22z" fill="${C.ink}"/>
        <text x="128" y="145" font-family="DejaVu Sans" font-size="21" font-weight="800" fill="${C.ink}">Seu negócio</text>
        <text x="128" y="177" font-family="DejaVu Sans" font-size="16" fill="#65746C">informação clara e atual</text>
        <line x1="30" y1="220" x2="400" y2="220" stroke="${C.line}"/>
        <g transform="translate(30 252)"><circle cx="20" cy="20" r="20" fill="${C.mint}"/><path d="M14 20h12M20 14v12" stroke="${C.green}" stroke-width="4" stroke-linecap="round"/><text x="58" y="27" font-family="DejaVu Sans" font-size="17" font-weight="700" fill="${C.ink}">Endereço e área atendida</text></g>
        <g transform="translate(30 315)"><circle cx="20" cy="20" r="20" fill="${C.cyan}" opacity=".38"/><circle cx="20" cy="20" r="9" fill="none" stroke="${C.ink}" stroke-width="4"/><path d="M20 11v10l7 5" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/><text x="58" y="27" font-family="DejaVu Sans" font-size="17" font-weight="700" fill="${C.ink}">Horários e contato</text></g>
      </g>
      <g transform="translate(558 145)">
        <circle cx="170" cy="170" r="170" fill="${C.deep}" filter="url(#shadow)"/>
        <path d="M170 66c-57 0-103 45-103 102 0 77 103 176 103 176s103-99 103-176c0-57-46-102-103-102zm0 140a40 40 0 110-80 40 40 0 010 80z" fill="${C.lime}"/>
        <circle cx="170" cy="166" r="24" fill="${C.deep}"/>
        <g transform="translate(270 25)"><rect width="118" height="68" rx="34" fill="${C.orange}"/><path d="M33 34l15 15 34-35" fill="none" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></g>
      </g>
    </g>
    <rect x="540" y="1100" width="468" height="72" rx="36" fill="${C.deep}"/><text x="774" y="1146" text-anchor="middle" font-family="DejaVu Sans" font-size="21" font-weight="800" fill="white">CONSISTÊNCIA GERA CLAREZA</text>`;
  return canvas({ background: C.cream, theme: 'light', body });
}

function simpleContactFormPost() {
  const body = `
    ${badge(72, 190, 'FORMULÁRIO DE CONTATO')}
    ${textLines(72, 330, ['Pedir orçamento', 'não deveria parecer', 'uma entrevista.'], { size: 64, weight: 800 })}
    ${textLines(72, 585, ['Pergunte só o necessário para', 'começar uma boa conversa.'], { size: 27, weight: 400, gap: 1.5, fill: '#516259' })}
    <g transform="translate(620 610) rotate(3 205 350) scale(.88)" filter="url(#shadow)">
      <rect width="410" height="700" rx="45" fill="white"/>
      <rect x="34" y="34" width="150" height="34" rx="17" fill="${C.mint}"/>
      <text x="109" y="57" text-anchor="middle" font-family="DejaVu Sans" font-size="14" font-weight="800" fill="${C.green}">FALE COM A GENTE</text>
      <text x="34" y="120" font-family="DejaVu Sans" font-size="27" font-weight="800" fill="${C.ink}">Vamos começar?</text>
      <text x="34" y="153" font-family="DejaVu Sans" font-size="16" fill="#64736B">Conte brevemente o que precisa.</text>
      <text x="34" y="210" font-family="DejaVu Sans" font-size="15" font-weight="700" fill="${C.ink}">Seu nome</text>
      <rect x="34" y="228" width="342" height="58" rx="14" fill="#F2F4EF" stroke="${C.line}"/>
      <text x="34" y="332" font-family="DejaVu Sans" font-size="15" font-weight="700" fill="${C.ink}">WhatsApp</text>
      <rect x="34" y="350" width="342" height="58" rx="14" fill="#F2F4EF" stroke="${C.line}"/>
      <text x="34" y="454" font-family="DejaVu Sans" font-size="15" font-weight="700" fill="${C.ink}">Como podemos ajudar?</text>
      <rect x="34" y="472" width="342" height="88" rx="14" fill="#F2F4EF" stroke="${C.line}"/>
      <rect x="34" y="598" width="342" height="68" rx="34" fill="${C.deep}"/>
      <text x="205" y="641" text-anchor="middle" font-family="DejaVu Sans" font-size="19" font-weight="800" fill="white">ENVIAR PEDIDO</text>
    </g>
    <g transform="translate(72 790)">
      <rect width="430" height="330" rx="42" fill="${C.deep}"/>
      <g transform="translate(38 40)"><circle cx="25" cy="25" r="25" fill="${C.lime}"/><path d="M14 25l8 8 17-20" fill="none" stroke="${C.ink}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><text x="72" y="19" font-family="DejaVu Sans" font-size="19" font-weight="800" fill="white">Só o essencial</text><text x="72" y="47" font-family="DejaVu Sans" font-size="15" fill="white" opacity=".65">cada pergunta tem um motivo</text></g>
      <g transform="translate(38 130)"><circle cx="25" cy="25" r="25" fill="${C.cyan}" opacity=".45"/><path d="M15 25h20M25 15v20" stroke="white" stroke-width="5" stroke-linecap="round"/><text x="72" y="19" font-family="DejaVu Sans" font-size="19" font-weight="800" fill="white">Rótulos claros</text><text x="72" y="47" font-family="DejaVu Sans" font-size="15" fill="white" opacity=".65">sem adivinhação no preenchimento</text></g>
      <g transform="translate(38 220)"><circle cx="25" cy="25" r="25" fill="${C.orange}" opacity=".85"/><path d="M15 25h20" stroke="white" stroke-width="5" stroke-linecap="round"/><text x="72" y="19" font-family="DejaVu Sans" font-size="19" font-weight="800" fill="white">Próximo passo visível</text><text x="72" y="47" font-family="DejaVu Sans" font-size="15" fill="white" opacity=".65">o cliente sabe o que acontece</text></g>
    </g>`;
  return canvas({ background: C.cream, theme: 'light', body });
}

function cookieChoicesPost() {
  const body = `
    ${badge(72, 190, 'PRIVACIDADE', { fill: C.lime, color: C.ink })}
    ${textLines(72, 330, ['Cookies no site:', 'a escolha precisa', 'ser clara.'], { size: 67, weight: 800, fill: C.white })}
    ${textLines(72, 585, ['Explique as finalidades e ofereça', 'controle de forma simples.'], { size: 27, weight: 400, gap: 1.5, fill: C.white, opacity: .78 })}
    <g transform="translate(72 770)" filter="url(#shadow)">
      <rect width="936" height="390" rx="46" fill="white"/>
      <g transform="translate(48 50)">
        <path d="M76 6a70 70 0 1070 70c-23 0-35-13-36-34-21 2-33-10-34-36z" fill="${C.yellow}"/>
        <circle cx="48" cy="77" r="8" fill="${C.ink}"/><circle cx="82" cy="104" r="9" fill="${C.ink}"/><circle cx="104" cy="69" r="7" fill="${C.ink}"/>
        <text x="190" y="45" font-family="DejaVu Sans" font-size="25" font-weight="800" fill="${C.ink}">Este site usa cookies</text>
        <text x="190" y="82" font-family="DejaVu Sans" font-size="17" fill="#5D6C64">Entenda para que servem antes de escolher.</text>
      </g>
      <g transform="translate(48 205)">
        <rect width="250" height="64" rx="32" fill="${C.deep}"/>
        <text x="125" y="41" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="white">ACEITAR</text>
        <rect x="276" width="250" height="64" rx="32" fill="white" stroke="${C.deep}" stroke-width="3"/>
        <text x="401" y="41" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="${C.ink}">RECUSAR</text>
        <rect x="552" width="288" height="64" rx="32" fill="${C.mint}"/>
        <text x="696" y="41" text-anchor="middle" font-family="DejaVu Sans" font-size="18" font-weight="800" fill="${C.green}">GERENCIAR OPÇÕES</text>
      </g>
      <g transform="translate(48 310)">
        <circle cx="15" cy="15" r="15" fill="${C.lime}"/><path d="M8 15l5 5 10-12" fill="none" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="45" y="21" font-family="DejaVu Sans" font-size="16" font-weight="700" fill="${C.ink}">informação clara</text>
        <circle cx="285" cy="15" r="15" fill="${C.cyan}" opacity=".48"/><path d="M278 15l5 5 10-12" fill="none" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="315" y="21" font-family="DejaVu Sans" font-size="16" font-weight="700" fill="${C.ink}">escolha disponível</text>
        <circle cx="585" cy="15" r="15" fill="${C.orange}" opacity=".72"/><path d="M578 15l5 5 10-12" fill="none" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="615" y="21" font-family="DejaVu Sans" font-size="16" font-weight="700" fill="${C.ink}">controle acessível</text>
      </g>
    </g>`;
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body });
}

function ownDomainPost() {
  const body = `
    ${badge(72, 190, 'DOMÍNIO PRÓPRIO', { fill: C.lime, color: C.ink })}
    ${textLines(72, 330, ['Sua marca merece', 'um endereço próprio.'], { size: 68, weight: 800, fill: C.white })}
    ${textLines(72, 505, ['Um nome simples ajuda o cliente', 'a reconhecer e acessar seu site.'], { size: 27, weight: 400, gap: 1.5, fill: C.white, opacity: .78 })}
    <g transform="translate(72 700)">
      <rect width="936" height="430" rx="48" fill="#F9F8F2" filter="url(#shadow)"/>
      <g transform="translate(45 45)">
        <rect width="846" height="80" rx="40" fill="#EAEDE7"/>
        <circle cx="42" cy="40" r="19" fill="none" stroke="${C.green}" stroke-width="6"/><path d="M55 53l18 18" stroke="${C.green}" stroke-width="6" stroke-linecap="round"/>
        <text x="95" y="50" font-family="DejaVu Sans" font-size="24" font-weight="700" fill="${C.ink}">suaempresa.com.br</text>
        <rect x="683" y="16" width="145" height="48" rx="24" fill="${C.lime}"/><text x="755" y="47" text-anchor="middle" font-family="DejaVu Sans" font-size="16" font-weight="800" fill="${C.ink}">ACESSAR</text>
      </g>
      <g transform="translate(45 170)">
        <rect width="255" height="205" rx="32" fill="${C.deep}"/>
        <circle cx="56" cy="54" r="28" fill="${C.cyan}" opacity=".46"/>
        <path d="M44 55h24M56 43v24" stroke="white" stroke-width="6" stroke-linecap="round"/>
        <text x="32" y="116" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="white">Fácil de lembrar</text>
        <text x="32" y="149" font-family="DejaVu Sans" font-size="16" fill="white" opacity=".65">curto, claro e ligado</text><text x="32" y="174" font-family="DejaVu Sans" font-size="16" fill="white" opacity=".65">ao nome do negócio</text>
      </g>
      <g transform="translate(325 170)">
        <rect width="255" height="205" rx="32" fill="${C.mint}"/>
        <circle cx="56" cy="54" r="28" fill="${C.lime}"/>
        <path d="M42 54h28M47 45h18M52 36h8" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
        <text x="32" y="116" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="${C.ink}">Nome consistente</text>
        <text x="32" y="149" font-family="DejaVu Sans" font-size="16" fill="${C.ink}" opacity=".65">mesma identidade no</text><text x="32" y="174" font-family="DejaVu Sans" font-size="16" fill="${C.ink}" opacity=".65">site e na divulgação</text>
      </g>
      <g transform="translate(605 170)">
        <rect width="286" height="205" rx="32" fill="${C.cyan}" opacity=".28"/>
        <circle cx="56" cy="54" r="28" fill="${C.orange}" opacity=".88"/>
        <path d="M42 54l10 10 20-24" fill="none" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="32" y="116" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="${C.ink}">Endereço oficial</text>
        <text x="32" y="149" font-family="DejaVu Sans" font-size="16" fill="${C.ink}" opacity=".65">um ponto direto para</text><text x="32" y="174" font-family="DejaVu Sans" font-size="16" fill="${C.ink}" opacity=".65">conteúdo e contato</text>
      </g>
    </g>`;
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body });
}

function authenticReviewsPost() {
  const body = `
    ${badge(72, 190, 'AVALIAÇÕES REAIS')}
    ${textLines(72, 330, ['A experiência dos', 'clientes também', 'conta sua história.'], { size: 64, weight: 800 })}
    ${textLines(72, 585, ['Depoimentos verdadeiros dão contexto', 'ao trabalho que sua empresa entrega.'], { size: 26, weight: 400, gap: 1.5, fill: '#516259' })}
    <g transform="translate(590 680) rotate(4 200 220) scale(.88)" filter="url(#shadow)">
      <rect width="410" height="365" rx="38" fill="${C.deep}"/>
      <circle cx="65" cy="65" r="32" fill="${C.lime}"/><path d="M48 62h34M48 76h24" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/>
      <text x="116" y="60" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="white">Experiência real</text>
      <text x="116" y="87" font-family="DejaVu Sans" font-size="15" fill="white" opacity=".6">cliente + serviço realizado</text>
      <rect x="45" y="130" width="238" height="48" rx="24" fill="${C.yellow}"/><text x="164" y="161" text-anchor="middle" font-family="DejaVu Sans" font-size="15" font-weight="800" fill="${C.ink}">DEPOIMENTO AUTORIZADO</text>
      <text x="45" y="225" font-family="DejaVu Sans" font-size="21" font-weight="700" fill="white">Relato apresentado sem alterar</text><text x="45" y="259" font-family="DejaVu Sans" font-size="21" font-weight="700" fill="white">o sentido original.</text>
      <rect x="45" y="305" width="210" height="9" rx="4.5" fill="white" opacity=".18"/><rect x="45" y="327" width="145" height="9" rx="4.5" fill="white" opacity=".10"/>
    </g>
    <g transform="translate(72 760)">
      <path d="M435 45C585 0 765 70 886 18" fill="none" stroke="${C.mint}" stroke-width="28" stroke-linecap="round"/>
      <g transform="translate(0 35)"><rect width="465" height="125" rx="30" fill="white" filter="url(#shadow)"/><circle cx="60" cy="62" r="29" fill="${C.lime}"/><path d="M47 62l9 9 20-24" fill="none" stroke="${C.ink}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><text x="110" y="55" font-family="DejaVu Sans" font-size="21" font-weight="800" fill="${C.ink}">Use relatos verdadeiros</text><text x="110" y="85" font-family="DejaVu Sans" font-size="16" fill="#617068">sem inventar ou editar o sentido</text></g>
      <g transform="translate(0 185)"><rect width="465" height="125" rx="30" fill="${C.deep}" filter="url(#shadow)"/><circle cx="60" cy="62" r="29" fill="${C.cyan}" opacity=".45"/><path d="M47 62h26M60 49v26" stroke="white" stroke-width="6" stroke-linecap="round"/><text x="110" y="55" font-family="DejaVu Sans" font-size="21" font-weight="800" fill="white">Mostre contexto</text><text x="110" y="85" font-family="DejaVu Sans" font-size="16" fill="white" opacity=".62">serviço, fonte e autorização</text></g>
      <g transform="translate(0 335)"><rect width="465" height="125" rx="30" fill="${C.mint}" filter="url(#shadow)"/><circle cx="60" cy="62" r="29" fill="${C.orange}" opacity=".82"/><path d="M45 55h30M45 69h22" stroke="white" stroke-width="6" stroke-linecap="round"/><text x="110" y="55" font-family="DejaVu Sans" font-size="21" font-weight="800" fill="${C.ink}">Responda com atenção</text><text x="110" y="85" font-family="DejaVu Sans" font-size="16" fill="${C.ink}" opacity=".62">inclusive quando houver crítica</text></g>
    </g>`;
  return canvas({ background: C.cream, theme: 'light', body });
}

function searchResultPreviewPost() {
  const body = `
    ${badge(72, 190, 'ANTES DO CLIQUE', { fill: C.lime, color: C.ink })}
    ${textLines(72, 330, ['O resultado da busca', 'já apresenta', 'a sua marca.'], { size: 64, weight: 800, fill: C.white })}
    ${textLines(72, 570, ['Título e resumo ajudam a explicar', 'o que a pessoa encontrará na página.'], { size: 26, weight: 400, gap: 1.5, fill: C.white, opacity: .78 })}
    <g transform="translate(72 725)" filter="url(#shadow)">
      <rect width="936" height="425" rx="46" fill="#F9F8F2"/>
      <g transform="translate(42 38)">
        <rect width="852" height="66" rx="33" fill="#E9EDE8"/>
        <circle cx="38" cy="33" r="15" fill="none" stroke="${C.green}" stroke-width="5"/>
        <path d="M49 44l14 14" stroke="${C.green}" stroke-width="5" stroke-linecap="round"/>
        <text x="82" y="42" font-family="DejaVu Sans" font-size="20" font-weight="600" fill="${C.ink}">site para negócio local</text>
      </g>
      <g transform="translate(54 145)">
        <circle cx="24" cy="24" r="24" fill="${C.deep}"/>
        <path d="M14 25l8 8 15-19" fill="none" stroke="${C.lime}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="64" y="20" font-family="DejaVu Sans" font-size="15" fill="#52645A">suaempresa.com.br</text>
        <text x="64" y="62" font-family="DejaVu Sans" font-size="27" font-weight="800" fill="#2456A6">Serviço claro para quem está procurando</text>
        <text x="64" y="102" font-family="DejaVu Sans" font-size="18" fill="#46564E">Um resumo útil explica a página antes do acesso</text>
        <text x="64" y="130" font-family="DejaVu Sans" font-size="18" fill="#46564E">e mantém a promessa alinhada ao conteúdo.</text>
      </g>
      <g transform="translate(54 318)">
        <rect width="245" height="54" rx="27" fill="${C.mint}"/>
        <text x="122" y="35" text-anchor="middle" font-family="DejaVu Sans" font-size="16" font-weight="800" fill="${C.green}">CLARO E ESPECÍFICO</text>
        <rect x="268" width="250" height="54" rx="27" fill="${C.cyan}" opacity=".28"/>
        <text x="393" y="35" text-anchor="middle" font-family="DejaVu Sans" font-size="16" font-weight="800" fill="${C.ink}">ÚNICO POR PÁGINA</text>
        <rect x="541" width="285" height="54" rx="27" fill="${C.yellow}" opacity=".72"/>
        <text x="683" y="35" text-anchor="middle" font-family="DejaVu Sans" font-size="16" font-weight="800" fill="${C.ink}">COERENTE COM O SITE</text>
      </g>
    </g>`;
  return canvas({ background: 'url(#darkGrad)', theme: 'dark', body });
}

function optimizedImagesPost() {
  const body = `
    ${badge(72, 190, 'IMAGENS + DESEMPENHO')}
    ${textLines(72, 330, ['Fotos bonitas não', 'precisam deixar', 'o site pesado.'], { size: 64, weight: 800 })}
    ${textLines(72, 570, ['A imagem certa preserva o visual', 'sem desperdiçar dados no celular.'], { size: 26, weight: 400, gap: 1.5, fill: '#516259' })}
    <g transform="translate(72 725)">
      <g filter="url(#shadow)">
        <rect width="370" height="425" rx="44" fill="${C.deep}"/>
        <rect x="34" y="34" width="302" height="225" rx="28" fill="${C.cyan}" opacity=".30"/>
        <circle cx="270" cy="88" r="35" fill="${C.yellow}"/>
        <path d="M62 224l78-92 62 66 48-54 58 80z" fill="${C.lime}" opacity=".88"/>
        <path d="M62 224l78-92 62 66" fill="none" stroke="${C.white}" stroke-width="8" stroke-linejoin="round" opacity=".7"/>
        <rect x="34" y="292" width="215" height="14" rx="7" fill="white" opacity=".9"/>
        <rect x="34" y="325" width="274" height="10" rx="5" fill="white" opacity=".28"/>
        <rect x="34" y="350" width="195" height="10" rx="5" fill="white" opacity=".18"/>
        <g transform="translate(265 346)"><circle cx="35" cy="35" r="35" fill="${C.lime}"/><path d="M20 35l10 10 21-25" fill="none" stroke="${C.ink}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g>
      </g>
      <g transform="translate(410 0)">
        <rect width="526" height="425" rx="44" fill="white" filter="url(#shadow)"/>
        <g transform="translate(38 45)"><circle cx="29" cy="29" r="29" fill="${C.lime}"/><path d="M15 29h28M21 20h16M25 11h8" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/><text x="78" y="22" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="${C.ink}">Tamanho adequado</text><text x="78" y="49" font-family="DejaVu Sans" font-size="15" fill="#637168">para cada tipo de tela</text></g>
        <g transform="translate(38 150)"><circle cx="29" cy="29" r="29" fill="${C.cyan}" opacity=".42"/><path d="M16 29h26M20 20h18M24 38h10" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/><text x="78" y="22" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="${C.ink}">Formato e compressão</text><text x="78" y="49" font-family="DejaVu Sans" font-size="15" fill="#637168">equilíbrio entre peso e nitidez</text></g>
        <g transform="translate(38 255)"><circle cx="29" cy="29" r="29" fill="${C.orange}" opacity=".78"/><path d="M16 29l9 9 19-23" fill="none" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><text x="78" y="22" font-family="DejaVu Sans" font-size="20" font-weight="800" fill="${C.ink}">Carregamento inteligente</text><text x="78" y="49" font-family="DejaVu Sans" font-size="15" fill="#637168">prioridade para o que aparece primeiro</text></g>
        <rect x="38" y="350" width="450" height="48" rx="24" fill="${C.mint}"/>
        <text x="263" y="381" text-anchor="middle" font-family="DejaVu Sans" font-size="16" font-weight="800" fill="${C.green}">VISUAL PROFISSIONAL, SEM EXCESSO</text>
      </g>
    </g>`;
  return canvas({ background: C.cream, theme: 'light', body });
}

function headlineVisualPost({
  badgeLabel = 'PRESENÇA DIGITAL',
  title = ['Seu negócio', 'merece destaque.'],
  description = ['Conteúdo claro, visual profissional', 'e um próximo passo visível.'],
  visual = 'browser',
  cta = 'FALE COM A GENTE',
  theme = 'light'
} = {}) {
  const dark = theme === 'dark';
  const foreground = dark ? C.white : C.ink;
  const background = dark ? 'url(#darkGrad)' : C.cream;
  const visualSvg = visual === 'phone'
    ? phone(610, 650, 320, 500, `<rect x="640" y="730" width="260" height="155" rx="28" fill="${C.deep}"/><rect x="670" y="770" width="160" height="16" rx="8" fill="white"/><rect x="670" y="810" width="115" height="10" rx="5" fill="white" opacity=".4"/><rect x="670" y="850" width="145" height="40" rx="20" fill="${C.lime}"/>`)
    : browserWindow(500, 680, 500, 390, { dark, accent: C.lime });

  const body = `
    ${badge(72, 190, badgeLabel, dark ? { fill: C.lime, color: C.ink } : {})}
    ${textLines(72, 330, title, { size: 68, weight: 800, fill: foreground })}
    ${textLines(72, 545, description, { size: 27, weight: 400, gap: 1.5, fill: foreground, opacity: dark ? .78 : 1 })}
    <circle cx="840" cy="420" r="285" fill="${dark ? C.cyan : C.lime}" opacity=".12"/>
    ${visualSvg}
    <rect x="72" y="1010" width="380" height="82" rx="41" fill="${dark ? C.lime : C.deep}"/>
    <text x="262" y="1062" text-anchor="middle" font-family="DejaVu Sans" font-size="22" font-weight="800" fill="${dark ? C.ink : C.white}">${cta}</text>`;

  return canvas({ background, theme, body });
}

export const templateRegistry = Object.freeze({
  'mobile-experience': mobilePost,
  'ad-flow-cover': landingSlide1,
  'message-match': landingSlide2,
  'single-goal': landingSlide3,
  'mobile-performance': landingSlide4,
  'offer': landingSlide5,
  'search-checklist': seoPost,
  'social-to-site': socialSitePost,
  'accessibility-grid': accessibilityPost,
  'secure-browser': securityPost,
  'conversion-map': conversionPost,
  'measurement-dashboard': measurementDashboardPost,
  'local-information': localInformationPost,
  'simple-contact-form': simpleContactFormPost,
  'cookie-choices': cookieChoicesPost,
  'own-domain': ownDomainPost,
  'authentic-reviews': authenticReviewsPost,
  'search-result-preview': searchResultPreviewPost,
  'optimized-images': optimizedImagesPost,
  'headline-visual': headlineVisualPost
});

export function renderTemplate(template, data = {}) {
  const renderer = templateRegistry[template];
  if (!renderer) {
    throw new Error(`Template desconhecido: ${template}`);
  }
  return renderer(data);
}
