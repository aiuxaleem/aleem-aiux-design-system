// Offline artboard renderer for run_script: builds an SVG foreignObject from a post's DC markup, embeds fonts + tokens, rasterises at 2x.
// Usage inside run_script: eval the file, then `await renderDcOffline({ dc, out, label, avatar })`.
async function renderDcOffline({ dc, out, avatar, width = 1080, height = 1350, fontUrl }) {
  const src = await readFile(dc);
  const start = src.indexOf('<div ref="{{ canvasRef }}"');
  const endMarker = '</div></div></div>\n</x-dc>';
  const end = src.indexOf(endMarker);
  if (start < 0 || end < 0) throw new Error('artboard markers not found in ' + dc);
  let art = src.slice(start, end + 6);
  art = art.replace(' ref="{{ canvasRef }}"', '').replace(/<sc-if[^>]*>/g, '').replace(/<\/sc-if>/g, '');
  art = art.replace(/<svg /g, '<svg xmlns="http://www.w3.org/2000/svg" ');
  const toDataUrl = b => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(b); });
  if (avatar) { const du = await toDataUrl(await readFileBinary(avatar)); art = art.replace(/<img([^>]*?)\s*\/?>/g, (m, a) => '<img' + a.replace('./author-avatar.png', du) + '/>'); }
  let css = '';
  for (const f of ['tokens.css', 'components/bundle.css']) css += (await readFile(f)).replace(/@import[^;]+;/g, '') + '\n';
  let fontCss = '';
  const fu = fontUrl || 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap';
  const txt = await (await fetch(fu)).text();
  const blocks = txt.split('@font-face').slice(1).map(b => '@font-face' + b.slice(0, b.indexOf('}') + 1)).filter(b => /U\+0000-00FF/.test(b));
  for (const b of blocks) { const m = b.match(/url\(([^)]+)\)/); if (!m) continue; fontCss += b.replace(m[1], await toDataUrl(await (await fetch(m[1])).blob())) + '\n'; }
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="width:' + width + 'px;height:' + height + 'px"><style><![CDATA[' + fontCss + css + ']]></style>' + art + '</div></foreignObject></svg>';
  const img = new Image();
  const loaded = new Promise((res, rej) => { img.onload = res; img.onerror = () => rej(new Error('svg failed to load (malformed XHTML?)')); });
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  await loaded;
  const c = createCanvas(width * 2, height * 2); const ctx = c.getContext('2d'); ctx.scale(2, 2); ctx.drawImage(img, 0, 0);
  await saveFile(out, c);
  return { fonts: blocks.length, bytes: svg.length };
}
