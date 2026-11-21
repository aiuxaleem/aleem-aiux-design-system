// Aleem: offline PNG renderer for inline-styled social posts (used by run_script when the preview host is down).
// Usage inside run_script:  const r = new Function('return ' + await readFile('scripts/render-post-png.js'))(); await r({ src, out, label, avatar });
// Renders the [data-screen-label] artboard of a .dc.html post into a 2x PNG via SVG foreignObject, embedding Plus Jakarta Sans and the avatar.
async function renderPostPng({ src, out, label, avatar, width = 1080, height = 1350, scale = 2, fontUrl = 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2' }) {
  const b64 = (buf) => { const u = new Uint8Array(buf); let s = ''; for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000)); return btoa(s); };
  const fontBuf = await fetch(fontUrl).then(r => { if (!r.ok) throw new Error('font ' + r.status); return r.arrayBuffer(); });
  const fontData = 'data:font/woff2;base64,' + b64(fontBuf);
  const avBlob = await readFileBinary(avatar);
  const avData = 'data:image/png;base64,' + b64(await avBlob.arrayBuffer());
  const html = await readFile(src);
  const s = html.indexOf('<div ref="{{ canvasRef }}"');
  const e = html.indexOf('</x-dc>');
  if (s < 0 || e < 0) throw new Error('artboard not found in ' + src);
  let art = html.slice(s, e).trim();
  art = art.replace(/<\/div>\s*<\/div>\s*<\/div>\s*$/, '</div>');
  art = replaceText(art, ' ref="{{ canvasRef }}"', '');
  art = art.replace(/<sc-if[^>]*>/g, '').replace(/<\/sc-if>/g, '');
  art = art.replace(/<img ([^>]*?)>/g, (m, a) => '<img ' + a + '/>');
  art = replaceText(art, './author-avatar.png', avData);
  art = replaceText(art, '<svg viewBox=', '<svg xmlns="http://www.w3.org/2000/svg" viewBox=');
  if (art.includes('{{')) throw new Error('template holes left in artboard');
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width * scale + '" height="' + height * scale + '" viewBox="0 0 ' + width + ' ' + height + '"><foreignObject width="' + width + '" height="' + height + '"><div xmlns="http://www.w3.org/1999/xhtml" style="width:' + width + 'px;height:' + height + 'px"><style>@font-face{font-family:\'Plus Jakarta Sans\';font-style:normal;font-weight:400 800;src:url(' + fontData + ') format(\'woff2\')}</style>' + art + '</div></foreignObject></svg>';
  const err = new DOMParser().parseFromString(svg, 'image/svg+xml').querySelector('parsererror');
  if (err) throw new Error('XML: ' + err.textContent.slice(0, 300));
  const img = new Image();
  await new Promise((res, rej) => { img.onload = res; img.onerror = () => rej(new Error('svg image failed')); img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); });
  await new Promise(r => setTimeout(r, 400));
  const c = createCanvas(width * scale, height * scale); const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0, c.width, c.height);
  await new Promise(r => setTimeout(r, 300));
  ctx.drawImage(img, 0, 0, c.width, c.height);
  await saveFile(out, c);
  return { out, width: c.width, height: c.height, fontKB: Math.round(fontBuf.byteLength / 1024) };
}
renderPostPng
