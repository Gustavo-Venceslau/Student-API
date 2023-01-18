import { Request, Response } from "express";
import { DeleteStudentUseCase } from "./deleteStudentUseCase";

export class DeleteStudentController{
    constructor(
        private deleteStudentUseCase: DeleteStudentUseCase
    ){}
    async handle(request: Request, response: Response){
        const email = request.params.email

        try{
            await this.deleteStudentUseCase.execute({ email });

            return response.status(200).send();
        }catch(err){
            return response.status(400).json({
                message: err.message || 'Unxpected Error'
            })
        }
    }
}