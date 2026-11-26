import {copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {runInNewContext} from 'node:vm';

const site = fileURLToPath(new URL('../', import.meta.url));
const publicSite = new URL('https://tankothek.github.io/the-escape-files/');
const script = readFileSync(join(site, 'data.js'), 'utf8');
const files = runInNewContext(script + '\nfiles', {}, {filename:'data.js'});
const entries = files.filter(file => file.status === 'published' && file.cover);
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
}[char]));

if (new Set(entries.map(file => file.id)).size !== entries.length) {
  throw new Error('Duplicate file IDs in the archive.');
}
for (const file of entries) {
  if (!/^\d{3,}$/.test(file.id) || !/^file-[\d]+\.(png|jpe?g|webp)$/i.test(file.cover) ||
      !existsSync(join(site, file.cover))) {
    throw new Error('Missing or invalid cover for File ' + file.id);
  }
}

function sharePage(file) {
  const title = 'File ' + file.id + ' · ' + file.title;
  const url = new URL('file/' + file.id + '/', publicSite).href;
  const image = new URL('cover.jpg', url).href;
  const reader = '../../#file-' + file.id;
  const alt = 'Original cover of Escape File ' + file.id + ' · ' + file.title;
  return `<!doctype html>
<html lang="en" prefix="og: https://ogp.me/ns#">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHTML(title)} — The Escape Files</title>
<link rel="canonical" href="${escapeHTML(url)}">
<meta name="description" content="${escapeHTML(file.topic)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="The Escape Files">
<meta property="og:locale" content="en_US">
<meta property="og:url" content="${escapeHTML(url)}">
<meta property="og:title" content="${escapeHTML(title)}">
<meta property="og:description" content="${escapeHTML(file.topic)}">
<meta property="og:image" content="${escapeHTML(image)}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="628">
<meta property="og:image:alt" content="${escapeHTML(alt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHTML(title)}">
<meta name="twitter:description" content="${escapeHTML(file.topic)}">
<meta name="twitter:image" content="${escapeHTML(image)}">
<meta name="twitter:image:alt" content="${escapeHTML(alt)}">
<link rel="icon" href="../../favicon-tankothek.png?v=2">
<link rel="stylesheet" href="../../style.css?v=57">
<body>
<main class="library">
  <h1>${escapeHTML(title)}</h1>
  <p>${escapeHTML(file.topic)}</p>
  <a id="read-file" href="${reader}">Read File ${file.id}</a>
</main>
<script>
  const reader = new URL(document.getElementById('read-file').href);
  const language = new URL(location.href).searchParams.get('lang');
  if (language) reader.searchParams.set('lang', language);
  location.replace(reader.href);
</script>
</body></html>
`;
}

const staging = mkdtempSync(join(tmpdir(), 'escape-share-'));
try {
  const cards = entries.map(file => ({
    id: file.id,
    week: String(file.week).padStart(2, '0'),
    title: file.title,
    source: join(site, file.cover),
    output: join(staging, file.id + '.jpg')
  }));
  const renderer = fileURLToPath(new URL('share-card.swift', import.meta.url));
  const result = spawnSync('swift', ['-module-cache-path', join(staging, 'swift-cache'), renderer], {
    input: JSON.stringify(cards),
    stdio: ['pipe', 'inherit', 'inherit']
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error('Could not render the share covers.');
  for (const file of entries) {
    const directory = join(site, 'file', file.id);
    mkdirSync(directory, {recursive:true});
    copyFileSync(join(staging, file.id + '.jpg'), join(directory, 'cover.jpg'));
    writeFileSync(join(directory, 'index.html'), sharePage(file));
  }
  writeFileSync(join(site, 'share-files.js'),
    'const shareableFiles = new Set(' + JSON.stringify(entries.map(file => file.id)) + ');\n');
  console.log('Prepared ' + entries.length + ' File share pages.');
} finally {
  rmSync(staging, {recursive:true, force:true});
}
