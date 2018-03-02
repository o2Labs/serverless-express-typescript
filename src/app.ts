import * as express from 'express';
import { json, urlencoded } from 'body-parser';
//import * as compression from 'compression';
import * as cors from 'cors';
import { eventContext } from 'aws-serverless-express/middleware';
import { join } from 'path';

export function configureApp() {
  const app = express();
  app.set('view engine', 'pug');
  app.set('views', join(__dirname, '/views'));
  //app.use(compression());
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(eventContext());

  app.get('/', (req, res) => {
    res.render('home');
  });

  return app;
}
