import { Request, Response } from "express";
import { UpdateStudentUseCase } from "./UpdateStudentUseCase";

export class UpdateStudentController {

    constructor(
        private updateStudentUseCase: UpdateStudentUseCase 
    ){}

    async hadle(request: Request, response: Response){
        const { name, email, password } = request.body;

        try{
            await this.updateStudentUseCase.execute({
                name,
                email,
                password
            });
            response.status(200).send();
        }catch(err){
            return response.status(400).json({
                message: err.message || 'Unxpected error'
            });
        }
    }
}