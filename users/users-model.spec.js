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

        it('should return the user inserted', async () => {
            const user = await Users.add({
                username: 'pshushereba',
                password: 'secret',
                email: 'patrick@test.com',
                name: 'patrick'
            })
            expect(user.name).toBe('patrick')
        })

        beforeEach(async () => {
            await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
        })
    })

    describe('update', () => {
        it('should update an existing user', async () => {
            await Users.updateUser(1, {
                    name: "test",
                    username: "test",
                    email: "testupdated@test.com",
                    password: "password"
            })

            const users = await db('users');
            expect(users).toHaveLength(1);
        })
    })
})