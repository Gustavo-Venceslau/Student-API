import { NextFunction, Request, Response, Router } from "express";
import { createStudentController } from "./useCases/createStudent";
import { deleteStudentController } from "./useCases/deleteStudent";
import { searchStudentController } from "./useCases/searchStudents";
import { updateStundentController } from "./useCases/updateStudent";

const router = Router();

router.post('/student', (request: Request, response: Response, next: NextFunction) => {
    return createStudentController.handle(request, response, next);
})
router.get('/student/:email', (request: Request, response: Response, next: NextFunction) => {
    return searchStudentController.handle(request,response, next);
})
router.put('/student/:email', (request: Request, response: Response, next: NextFunction) => {
    return updateStundentController.hadle(request,response, next);
});
router.delete('/student/:email', (request: Request, response: Response, next: NextFunction) => {
    return deleteStudentController.handle(request, response, next);
});

export { router }