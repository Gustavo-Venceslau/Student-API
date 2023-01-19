import { NextFunction, Request, Response } from "express";
import { CreateStudentUseCase } from "./createStudentUseCase";

export class CreateStudentController {
    constructor(
        private createUserUseCase: CreateStudentUseCase
    ){}
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response>{
        const {name, email, password} = request.body;

        try{
            await this.createUserUseCase.execute({
                name,
                email,
                password
            });

            return response.status(201).send();
        }catch(err){
            next(err)
        }
    }
}