import { Request, Response } from "express";
import { CreateStudentUseCase } from "./createStudentUseCase";

export class CreateStudentController {
    constructor(
        private createUserUseCase: CreateStudentUseCase
    ){}
    async handle(request: Request, response: Response): Promise<Response>{
        const {name, email, password} = request.body;

        try{
            await this.createUserUseCase.execute({
                name,
                email,
                password
            });

            return response.status(201).send();
        }catch(err){
            return response.status(400).json({
                message: err.message || 'Unxpected error'
            })
        }
    }
}