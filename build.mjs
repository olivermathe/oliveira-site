import { mkdir, readFile, readdir, rm, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
import CleanCSS from 'clean-css';
import { minify as minifyHtml } from 'html-minifier-terser';
import { optimize as optimizeSvg } from 'svgo';
import { minify as minifyJavaScript } from 'terser';

const root = process.cwd();
const outputDirectory = path.join(root, 'dist');
const outputAssetsDirectory = path.join(outputDirectory, 'assets');

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputAssetsDirectory, { recursive: true });

const html = await readFile(path.join(root, 'index.html'), 'utf8');
const minifiedHtml = await minifyHtml(html, {
  collapseWhitespace: true,
  conservativeCollapse: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortAttributes: true,
  sortClassName: true,
  useShortDoctype: true
});
await writeFile(path.join(outputDirectory, 'index.html'), minifiedHtml);

const css = await readFile(path.join(root, 'style.css'), 'utf8');
const minifiedCss = new CleanCSS({ level: 2 }).minify(css);
if (minifiedCss.errors.length > 0) {
  throw new Error(`CSS minification failed: ${minifiedCss.errors.join(', ')}`);
}
await writeFile(path.join(outputDirectory, 'style.css'), minifiedCss.styles);

const javaScript = await readFile(path.join(root, 'script.js'), 'utf8');
const minifiedJavaScript = await minifyJavaScript(javaScript, {
  compress: { passes: 2 },
  mangle: true
});
if (!minifiedJavaScript.code) {
  throw new Error('JavaScript minification produced no output.');
}
await writeFile(path.join(outputDirectory, 'script.js'), minifiedJavaScript.code);

const assetNames = await readdir(path.join(root, 'assets'));
for (const assetName of assetNames) {
  const source = path.join(root, 'assets', assetName);
  const destination = path.join(outputAssetsDirectory, assetName);

  if (path.extname(assetName).toLowerCase() === '.svg') {
    const svg = await readFile(source, 'utf8');
    const optimizedSvg = optimizeSvg(svg, {
      multipass: true,
      path: source,
      plugins: ['preset-default']
    });
    await writeFile(destination, optimizedSvg.data);
  } else {
    await copyFile(source, destination);
  }
}

console.log('Build concluído: HTML, CSS, JavaScript e SVGs minificados em dist/.');
