const app = require('./app');
const request = require('supertest');

let testApp;

beforeEach(() => {
    testApp = request(app);
});

it('can make a GET request to the app', async () => {
    await testApp.get('/').expect(200);
});

it('can make concurrent GET requests to the app', async () => {
    const request1 = testApp.get('/');
    const request2 = testApp.get('/');
    await request1.expect(200);
    await request2.expect(200);
});
