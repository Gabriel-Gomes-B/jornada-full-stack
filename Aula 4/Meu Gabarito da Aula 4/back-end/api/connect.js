// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from 'mongodb'

const URI = "mongodb+srv://gabriel:<db-password>@cluster0.rn82p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("SpotifyAula");
// const songColletion = await db.collection('songs').find({}).toArray();

// console.log(db);