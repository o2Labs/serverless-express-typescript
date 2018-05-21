import * as request from 'supertest';
import { configureApp } from '../src/app';

describe('a feature of the system', () => {
  it('displays some specific behaviour', async () => {
    const app = configureApp();
    const response = await request(app).get('/');
    expect(response).toMatchObject({
      status: 200,
      text:
        '<!DOCTYPE html><html><head><title>Serverless Express Typescript Starter Kit</title></head><body><h1>Serverless Express Typescript Starter Kit</h1><p>Hello world!</p></body></html>',
    });
  });
});
