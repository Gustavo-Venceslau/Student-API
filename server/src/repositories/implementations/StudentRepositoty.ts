import { client } from "../../db/mongoDb";
import { StudentCollec } from "../../db/mongoDbDocuments/StudentDocument";
import { Student } from "../../entities/Student";
import { IStudentRepository } from "../IStudentRepository";

export class StudentRepository implements IStudentRepository{

    async findByEmail(email: string): Promise<Student> {
        const query = { email: email }
        await client.connect();
        const data = await StudentCollec.findOne(query);
        await client.close()
        return data;
    }
    async save(student: Student): Promise<void> {
        let query = {
            name: student.name,
            email: student.email,
            password: student.password,
        }
        await client.connect();
        await StudentCollec.insertOne(query);
        await client.close();
    }
    async update(email: string, data: Student): Promise<void> {
        let query = { $set: { name: data.name, email: data.email, password: data.password} }

        await client.connect();
        await StudentCollec.updateOne({email: email} , query);
        await client.close();
    }
    async delete(email: string): Promise<void> {
        let query = { email: email }

        await client.connect();
        await StudentCollec.deleteMany(query);
        await client.close();
    }

}