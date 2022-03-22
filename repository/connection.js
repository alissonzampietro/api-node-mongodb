import { MongoClient } from 'mongodb'
const client = new MongoClient(process.env.MONGO_URI)

export async function getConnection() {
  await client.connect();
  console.log('Connected successfully to server');
  return client.db()
}