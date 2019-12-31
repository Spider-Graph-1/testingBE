const Users = require('./users-model.js');
const db = require('../data/db-config.js');

describe('users model', () => {
    describe('add', () => {
        it('should insert a user into the database', async () => {
            await Users.add({
                username: 'pshushereba',
                password: 'secret',
                email: 'patrick@test.com',
                name: 'patrick'
            })

            const users = await db('users');
            expect(users).toHaveLength(1);
        })

        beforeEach(async () => {
            await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
        })
    })
})