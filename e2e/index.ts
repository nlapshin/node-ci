import request from 'supertest'
import { expect } from 'chai'
import { app, server } from '../src'

after(() => {
  server.close()
})

describe('GET /hello/:name', function() {
  it('should return text "Hello world from express" for request with name "world"', async() => {
    const response = await request(app)
      .get('/hello/world')
      .set('Accept', 'application/json')

    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Hello world from express');
  });
});
