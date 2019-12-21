const db = require('../data/db-config.js');

async function add(user) {
    const [id] = await db('users')
        .returning('id')
        .insert(user);

    return findById(id);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

module.exports = {
    add,
    findById
}