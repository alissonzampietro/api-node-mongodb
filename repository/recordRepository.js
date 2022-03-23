const {getConnection} = require('./connection.js');

async function getAll() {
    const collection = (await getConnection()).collection('records')
    return collection.find({}).toArray()
}

module.exports = {
    getAll
}