import app, { server } from '../../../../server';
import request from 'supertest';

describe('POST => /complexity', () => {
  afterEach(async () => {
    await server.close();
  });

  describe('without query parameters', () => {
    it('should return the lexical density', async () => {
      const path = '/complexity';
      const body = { input_text: 'Kim loves going to  the cinema' };
      const got = await request(app)
        .post(path)
        .send(body);
      const wanted = { overall_ld: 0.67 };
      expect(got.status).toEqual(200);
      expect(got.body).toEqual(wanted);
    });
  });

  describe('with mode query parameter', () => {
    it('should return the verbose lexical density', async () => {
      const path = '/complexity';
      const body = { input_text: 'Kim loves going. to  the. cinema' };
      const params = { mode: 'verbose' };
      const got = await request(app)
        .post(path)
        .query(params)
        .send(body);
      const wanted = {
        overall_ld: 0.67,
        sentence_ld: [1, 0, 1],
      };
      expect(got.status).toEqual(200);
      expect(got.body).toEqual(wanted);
    });
  });
});