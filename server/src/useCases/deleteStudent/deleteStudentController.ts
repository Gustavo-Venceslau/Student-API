import { NextFunction, Request, Response } from "express";
import { DeleteStudentUseCase } from "./deleteStudentUseCase";

export class DeleteStudentController{
    constructor(
        private deleteStudentUseCase: DeleteStudentUseCase
    ){}
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response>{
        const email = request.params.email

        try{
            await this.deleteStudentUseCase.execute({ email });

            return response.status(200).send();
        }catch(error){
            next(error)
        }
    }
}