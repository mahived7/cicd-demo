const request = require('supertest');
const app = require('./app');

test('GET / returns 200', async () => {
  const res = await request(app).get('/');
  expect(res.status).toBe(200);
  expect(res.text).toBe('Hello CI/CD!');
});
