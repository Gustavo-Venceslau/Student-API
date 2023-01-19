import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../entities/errors/databaseError";

export function errorHandler(error: any, request: Request, response: Response, next: NextFunction){
    if(error instanceof DatabaseError){
        response.status(400).send();
    }
    else{
        response.status(500).send();
    }
}