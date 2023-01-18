import { Student } from "../../entities/Student";
import { IStudentRepository } from "../../repositories/IStudentRepository";
import { ISeachStudentRequestDTO } from "./searchStudentDTO";

export class SearchStudentUseCase{

    constructor(
        private studentRepository: IStudentRepository
    ){}

    async execute(data: ISeachStudentRequestDTO): Promise<Student>{
        const findedStundet = await this.studentRepository.findByEmail(data.studentEmail);

        if(!findedStundet){
            throw new Error('Student not founded')
        }

        const student = new Student(findedStundet)

        return student;
    }
}