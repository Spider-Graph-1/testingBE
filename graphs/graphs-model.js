const db = require('../data/db-config.js');

function getAll() {
    return db.('graphs');
}


async function add(graph) {
    const [id] = await db('graphs')
        .returning('id')
        .insert(graph);

    return findById(id);
}

async function findById(id) {
    return await db('graphs')
        .where({ id })
        .first();
}

async function getAllUserGraphs(id) {
    return await db('graphs')
        .where({ user_id: id });
}

async function updateGraph(id, changes) {
    await db('graphs')
        .where({ id })
        .update(changes);

    const changedGraph = await findById(id);

    return changedGraph;
}

async function deleteGraph(id) {
    const deleted = await db('graphs')
        .where({ id })
        .del();

    return deleted;
}

module.exports = {
    add,
    getAll,
    findById,
    getAllUserGraphs,
    updateGraph,
    deleteGraph
}
