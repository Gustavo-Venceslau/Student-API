import { Student } from "../../entities/Student";
import { client } from "../mongoDb";

require('dotenv').config();

const database = client.db(process.env.DB_NAME);
const StudentCollec = database.collection<Student>(process.env.DB_COLLECTION);

export { StudentCollec, database };