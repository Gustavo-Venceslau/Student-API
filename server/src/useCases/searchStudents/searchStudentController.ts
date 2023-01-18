import { Request, Response } from "express";
import { SearchStudentUseCase } from "./searchStudentUseCase";

export class SearchStudentController{
    constructor(
        private searchStudentUseCase: SearchStudentUseCase
    ){}
    async handle(request: Request, response: Response ){
        const studentEmail = request.params.email
        try{
            const {name, email, password} = await this.searchStudentUseCase.execute({ studentEmail });

            return response.status(200).json({
                name, email, password
            });
        }catch(err){
            return response.status(400).json({
                message: err.message || 'Unxpected error'
            })
        }
    }
}