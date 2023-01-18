import { Request, Response, Router } from "express";
import { createStudentController } from "./useCases/createStudent";
import { deleteStudentController } from "./useCases/deleteStudent";
import { searchStudentController } from "./useCases/searchStudents";
import { updateStundentController } from "./useCases/updateStudent";

const router = Router();

router.post('/student', (request: Request, response: Response) => {
    return createStudentController.handle(request, response);
})
router.get('/student/:email', (request: Request, response: Response) => {
    return searchStudentController.handle(request,response);
})
router.put('/student/:email', (request: Request, response: Response) => {
    return updateStundentController.hadle(request,response);
});
router.delete('/student/:email', (request: Request, response: Response) => {
    return deleteStudentController.handle(request, response);
});

export { router }