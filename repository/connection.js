const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MONGO_URI)

async function getConnection() {
  await client.connect();
  console.log('Connected successfully to server');
  return client.db()
}

module.exports = {
  getConnection
}