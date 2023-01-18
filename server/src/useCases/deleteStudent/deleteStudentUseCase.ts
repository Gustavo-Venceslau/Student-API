import { IStudentRepository } from "../../repositories/IStudentRepository";
import { IDeleteStudentRequestDTO } from "./deleteStudentDTO";

export class DeleteStudentUseCase{
    constructor(
        private studentRepository: IStudentRepository
    ){}
    async execute(data: IDeleteStudentRequestDTO){
        const studentExists = await this.studentRepository.findByEmail(data.email);

        if(!studentExists){
            throw new Error('Student not exists');
        }

        await this.studentRepository.delete(data.email);
    }
}