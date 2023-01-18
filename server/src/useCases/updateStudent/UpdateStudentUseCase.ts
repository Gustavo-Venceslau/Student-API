import { IStudentRepository } from "../../repositories/IStudentRepository";
import { IUpdateStudentRequestDTO } from "./UpdateStudentDTO";

export class UpdateStudentUseCase {
    constructor(
        private StudentRepository: IStudentRepository
    ){}

    async execute(data: IUpdateStudentRequestDTO){
        const studentExists = await this.StudentRepository.findByEmail(data.email);

        if(!studentExists){
            throw new Error('Student not exists');
        }

        await this.StudentRepository.update(data.email, data)
    }
}