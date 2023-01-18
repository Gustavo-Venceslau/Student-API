import { Student } from "../../entities/Student";
import { IStudentRepository } from "../../repositories/IStudentRepository";
import { ICreateStudentDTO } from "./createStudentDTO";

export class CreateStudentUseCase{
    constructor(
        private studentRepository: IStudentRepository
    ){}
    async execute(data: ICreateStudentDTO) {
        const alreadyExist = await this.studentRepository.findByEmail(data.email);
        
        if(alreadyExist){
            throw new Error('Student already Exists');
        }

        const student = new Student(data)

        await this.studentRepository.save(student)
    }
}