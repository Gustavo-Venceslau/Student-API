import { IStudentRepository } from "../../repositories/IStudentRepository";
import { IUpdateStudentRequestDTO } from "./UpdateStudentDTO";

export class UpdateStudentUseCase {
    constructor(
        private StudentRepository: IStudentRepository
    ){}

    async execute(data: IUpdateStudentRequestDTO,  email: string){
        const studentExists = await this.StudentRepository.findByEmail(email);

        if(!studentExists){
            throw new Error('Student not exists');
        }
        else{
            await this.StudentRepository.update(email, data)
        }       
    }
}