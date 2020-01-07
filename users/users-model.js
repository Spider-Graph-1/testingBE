const db = require('../data/db-config.js');

 function find() {
    return db('users')
}

async function add(user) {
    const [id] = await db('users')
        .returning('id')
        .insert(user);

    return findById(id);
}

function findBy(filter) {
    return db('users').where(filter);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

async function updateUser(id, changes) {
    await db('users')
        .where({ id })
        .update(changes);

    const changedUser = await findById(id);

    return changedUser
}

async function deleteUser(id) {
    const deleted = await db('users')
        .where({ id })
        .del();

    return deleted;
}


module.exports = {
    add,
    find,
    findBy,
    findById,
    updateUser,
    deleteUser
}