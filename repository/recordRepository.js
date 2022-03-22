import {getConnection} from './connection.js'

const collection = (await getConnection()).collection('records')

export function getAll() {
    return collection.find({}).toArray()
}