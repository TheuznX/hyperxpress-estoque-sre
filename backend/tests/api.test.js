const request = require('supertest');
const app = require('../src/app');

describe('Testes da API', () => {
  it('Deve retornar 200 no endpoint /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
  });

  it('Deve retornar a lista de produtos do estoque', async () => {
    const res = await request(app).get('/api/produtos');
    expect(res.statusCode).toBeDefined();
  });
});