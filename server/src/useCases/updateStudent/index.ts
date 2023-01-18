import { StudentRepository } from "../../repositories/implementations/StudentRepositoty";
import { UpdateStudentController } from "./UpdateStudentController";
import { UpdateStudentUseCase } from "./UpdateStudentUseCase";

const studentRepository = new StudentRepository();
const updateStudentUseCase = new UpdateStudentUseCase(studentRepository);
const updateStundentController = new UpdateStudentController(updateStudentUseCase);

export { updateStundentController, updateStudentUseCase };