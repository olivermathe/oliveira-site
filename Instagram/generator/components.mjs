import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { brand, C, dimensions } from './theme.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const logo = await readFile(path.join(here, '..', '..', 'assets', 'oliveira-sites-icon.svg'), 'utf8');
const logoData = `data:image/svg+xml;base64,${Buffer.from(logo).toString('base64')}`;

export const esc = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

export function textLines(x, y, lines, { size = 48, fill = C.ink, weight = 700, gap = 1.12, anchor = 'start', opacity = 1 } = {}) {
  return `<text x="${x}" y="${y}" font-family="${brand.font}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" opacity="${opacity}">${lines.map((line, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : size * gap}">${esc(line)}</tspan>`).join('')}</text>`;
}

export function badge(x, y, label, { fill = C.mint, color = C.green, width = Math.max(145, label.length * 11 + 48) } = {}) {
  return `<g transform="translate(${x} ${y})"><rect width="${width}" height="42" rx="21" fill="${fill}"/><text x="${width / 2}" y="29" text-anchor="middle" font-family="${brand.font}" font-size="18" font-weight="800" fill="${color}">${esc(label)}</text></g>`;
}

export function brandHeader(theme = 'dark', label = brand.name) {
  const fill = theme === 'dark' ? C.white : C.ink;
  return `
    <image href="${logoData}" x="72" y="66" width="64" height="64"/>
    <text x="154" y="105" font-family="${brand.font}" font-size="24" font-weight="700" fill="${fill}">${esc(label)}</text>
    <circle cx="1000" cy="98" r="5" fill="${C.lime}"/>
    <circle cx="978" cy="98" r="5" fill="${theme === 'dark' ? C.cyan : C.green}" opacity=".75"/>
    <circle cx="956" cy="98" r="5" fill="${fill}" opacity=".25"/>`;
}

export function footer(theme = 'dark', label = brand.handle) {
  const fill = theme === 'dark' ? C.white : C.ink;
  return `<text x="72" y="1292" font-family="${brand.font}" font-size="20" font-weight="600" fill="${fill}" opacity=".78">${esc(label)}</text>
  <rect x="910" y="1274" width="98" height="4" rx="2" fill="${C.lime}"/>`;
}

export function defs() {
  return `<defs>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#07120D" flood-opacity=".20"/></filter>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="55"/></filter>
    <linearGradient id="darkGrad" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0C2117"/><stop offset="1" stop-color="#244B35"/></linearGradient>
    <linearGradient id="limeGrad" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#D8FF85"/><stop offset="1" stop-color="#8CCB58"/></linearGradient>
    <pattern id="grid" width="54" height="54" patternUnits="userSpaceOnUse"><path d="M54 0H0V54" fill="none" stroke="#FFFFFF" stroke-opacity=".055" stroke-width="1"/></pattern>
  </defs>`;
}

export function canvas({ background = C.cream, theme = 'light', body, header = brand.name, footerLabel = brand.handle }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${dimensions.width}" height="${dimensions.height}" viewBox="0 0 ${dimensions.width} ${dimensions.height}">
    ${defs()}
    <rect width="${dimensions.width}" height="${dimensions.height}" fill="${background}"/>
    ${background === 'url(#darkGrad)' || theme === 'dark' ? `<rect width="${dimensions.width}" height="${dimensions.height}" fill="url(#grid)"/>` : ''}
    ${brandHeader(theme, header)}
    ${body}
    ${footer(theme, footerLabel)}
  </svg>`;
}

export function browserWindow(x, y, w, h, { dark = false, accent = C.lime } = {}) {
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
    <circle cx="${x + w * .75}" cy="${y + h * .53}" r="${Math.min(w, h) * .1}" fill="${accent}" opacity=".7"/>
  </g>`;
}

export function phone(x, y, w, h, screenBody = '') {
  return `<g filter="url(#shadow)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="52" fill="#0B1711"/>
    <rect x="${x + 12}" y="${y + 12}" width="${w - 24}" height="${h - 24}" rx="42" fill="${C.white}"/>
    <rect x="${x + w * .36}" y="${y + 22}" width="${w * .28}" height="9" rx="4.5" fill="#0B1711"/>
    ${screenBody}
  </g>`;
}

export function arrow(x1, y1, x2, y2, color = C.lime) {
  return `<path d="M${x1} ${y1}H${x2}" stroke="${color}" stroke-width="10" stroke-linecap="round"/><path d="M${x2 - 15} ${y2 - 25}l30 25-30 25" fill="none" stroke="${color}" stroke-width="10" stroke-linejoin="round"/>`;
}
