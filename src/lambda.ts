require('source-map-support').install();
import { createServer, proxy } from 'aws-serverless-express';
import { Context } from 'aws-lambda';
import { configureApp } from './app';

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below, then redeploy (`npm run package-deploy`)
const binaryMimeTypes: string[] = [
  // 'application/javascript',
  // 'application/json',
  // 'application/octet-stream',
  // 'application/xml',
  // 'font/eot',
  // 'font/opentype',
  // 'font/otf',
  // 'image/jpeg',
  // 'image/png',
  // 'image/svg+xml',
  // 'text/comma-separated-values',
  // 'text/css',
  // 'text/html',
  // 'text/javascript',
  // 'text/plain',
  // 'text/text',
  // 'text/xml',
];
const app = configureApp();
const server = createServer(app, undefined, binaryMimeTypes);

export const http = (event: any, context: Context) =>
  proxy(server, event, context);
