import express from 'express';
import { createServer } from 'vite';
import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const indexHTML = path.resolve(dirname, 'index.html');

async function startServer() {
  const app = express();
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (request, response) => {
    const url = request.originalUrl;

    try {
      const template = fs.readFileSync(indexHTML, 'utf8');
      const transformHTML = await vite.transformIndexHtml(url, template);
      const [startHTML, endHTML] = transformHTML.split('<!--app-->');

      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');

      try {
        response.write(startHTML);
        const { stream, injectPreload } = await render(url, {
          onShellReady() {
            stream.pipe(response);
          },
          onAllReady() {
            const preloadEndHTML = endHTML.replace(
              '<!--preload-->',
              injectPreload()
            );
            response.write(preloadEndHTML);
            response.end();
          },
        });
      } catch (error) {
        throw new Error(JSON.stringify(error));
      }
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  });

  return app;
}

const PORT = 3001;

startServer().then((app) => {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Pay Attention! Server is running on PORT: http://localhost:${PORT}`
    );
  });
});
