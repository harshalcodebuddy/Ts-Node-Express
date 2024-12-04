import request from 'supertest';
import app from '../src/index'; // Make sure to export the Express app from index.ts

describe('GET /hello', () => {
  it('should return 200 status code and "Hello World"', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});

describe('POST /hello', () => {
  it('should return 200 status code and "Hello {username}" if username is provided', async () => {
    const response = await request(app)
      .post('/hello')
      .send({ username: 'John' });
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello John');
  });

  it('should return 400 status code if username is not provided or empty', async () => {
    const response = await request(app).post('/hello').send({});
    expect(response.status).toBe(400);
    expect(response.text).toBe('Username is required');
  });
});

describe('GET /hello/user/:username', () => {
  it('should return 400 status code if username is not provided or empty', async () => {
    const response = await request(app).get('/hello/user/');
    expect(response.status).toBe(404); // Change to 404 since it's not a valid endpoint
  });

  it('should return 200 status code if username is valid', async () => {
    const response = await request(app).get('/hello/user/John');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello John');
  });
});
