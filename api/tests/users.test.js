const request = require('supertest');
const app = require('../app');


describe('Users Endpoints', () => {

  it('should fetch a single user', async () => {
    const userId = 2;
    const res = await request(app).get(`/users/${userId}`);
    expect(res.statusCode).toEqual(200);
    // expect(JSON.parse(res.text).data.firstName).equals("Gaurav");
    // TODO: add more test conditions
  });

  it('should fetch all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    // expect(JSON.parse(res.text).data.length).toBeGreaterThan(0);
    // TODO: add more test conditions
  });
});
