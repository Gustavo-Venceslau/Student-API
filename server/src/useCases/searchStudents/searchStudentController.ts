import { NextFunction, Request, Response } from "express";
import { SearchStudentUseCase } from "./searchStudentUseCase";

export class SearchStudentController{
    constructor(
        private searchStudentUseCase: SearchStudentUseCase
    ){}
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response>{
        const studentEmail = request.params.email
        try{
            const {name, email, password} = await this.searchStudentUseCase.execute({ studentEmail });

            return response.status(200).json({
                name, email, password
            });
        }catch(error){
            next(error);
        }
    }
}