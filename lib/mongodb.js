// mongodb.js

import { MongoClient } from 'mongodb'

const MONGOURI = "mongodb+srv://vercel-admin-user:hn9YcGhxItQFUFQu@shopello.tsvz3ld.mongodb.net"
const uri = MONGOURI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

if (!MONGOURI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise