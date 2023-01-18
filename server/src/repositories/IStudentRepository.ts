import { Student } from "../entities/Student";
import { IUpdateStudentRequestDTO } from "../useCases/updateStudent/UpdateStudentDTO";

export interface IStudentRepository {
    findByEmail(email: string): Promise<Student>;
    save(student: Student): Promise<void>;
    update(email: string, data: IUpdateStudentRequestDTO): Promise<void>;
    delete(email: string): Promise<void>;
}