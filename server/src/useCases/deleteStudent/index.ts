import { StudentRepository } from "../../repositories/implementations/StudentRepositoty";
import { DeleteStudentController } from "./deleteStudentController";
import { DeleteStudentUseCase } from "./deleteStudentUseCase";

const studentRepository = new StudentRepository();
const deleteStudentUseCase = new DeleteStudentUseCase(studentRepository);
const deleteStudentController = new DeleteStudentController(deleteStudentUseCase);

export { deleteStudentController, deleteStudentUseCase }