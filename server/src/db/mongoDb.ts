import { MongoClient } from "mongodb";

require('dotenv').config();

const url = process.env.DB_KEY;
const client = new MongoClient(url);

export { client };