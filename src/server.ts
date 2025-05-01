import {
  AngularAppEngine,
  createRequestHandler,
  writeResponseToNodeResponse,
  isMainModule,
} from '@angular/ssr';

import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getContext } from '@netlify/angular-runtime';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const engine = new AngularAppEngine();

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  engine
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Local server (used for development)
 */
if (isMainModule(import.meta.url)) {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`✅ Local server listening on http://localhost:${port}`);
  });
}

/**
 * Export Netlify-compatible handler
 */
export const handler = createRequestHandler(engine, getContext());
