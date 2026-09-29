import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const port = Number(process.env.PORT || 8080);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535');
}
const indexFile = new URL('./index.html', import.meta.url);
const server = createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  let pathname;
  try { pathname = new URL(req.url, 'http://localhost').pathname; }
  catch { res.writeHead(400).end('Bad request'); return; }
  if (pathname === '/favicon.ico') { res.writeHead(204).end(); return; }
  if (!['/', '/index.html'].includes(pathname)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Хуудас олдсонгүй');
    return;
  }
  try {
    const html = await readFile(indexFile);
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Length': html.length,
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff'
    });
    res.end(req.method === 'HEAD' ? undefined : html);
  } catch (error) {
    console.error(error.message);
    res.writeHead(500).end('index.html файлыг уншиж чадсангүй');
  }
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? `${port} порт ашиглагдаж байна. Өмнөх процессыг Ctrl+C дарж зогсоох эсвэл PORT=8081 npm start ажиллуулаарай.`
    : error.message);
  process.exitCode = 1;
});
server.listen(port, '0.0.0.0', () => {
  console.log(`Тэмдэглэл: http://localhost:${port}`);
  console.log(`Codespaces → Ports → ${port} → Open in Browser`);
});
