import { NextFunction, Request, Response } from "express";
import { UpdateStudentUseCase } from "./UpdateStudentUseCase";

export class UpdateStudentController {

    constructor(
        private updateStudentUseCase: UpdateStudentUseCase 
    ){}

    async hadle(request: Request, response: Response, next: NextFunction): Promise<Response>{
        const { name, email, password } = request.body;

        const StudentEmail = request.params.email;

        try{
            await this.updateStudentUseCase.execute({
                name,
                email,
                password
            }, StudentEmail);
            return response.status(200).send();
        }catch(err){
            next(err)
        }
    }
}