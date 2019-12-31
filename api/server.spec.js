const request = require('supertest');
const server = require('./server.js');
const db = require('../data/db-config.js');

describe('server.js', () => {
    describe('POST /register', () => {
        it('should return 201 created', async () => {
            const user = 
                { 
                    name: "test",
                    username: "test",
                    email: "test77@test.com",
                    password: "password"
                }
            const res = await request(server).post('/api/auth/register').send(user);
            expect(res.status).toBe(201);
        })

        beforeEach(async () => {
            await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
          });
    })

    describe('POST /login', () => {
        it('should return 200 OK.', async () => {
            const user = {username: "test", password: "password"}
            const res = await request(server).post('/api/auth/login').send(user);
            expect(res.status).toBe(200);
        })
    })
})