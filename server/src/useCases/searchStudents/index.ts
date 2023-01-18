import { SearchStudentUseCase } from "./searchStudentUseCase";
import { StudentRepository } from "../../repositories/implementations/StudentRepositoty";
import { SearchStudentController } from "./searchStudentController";



const studentRepository = new StudentRepository();

const searchStudentUseCase = new SearchStudentUseCase(studentRepository);

const searchStudentController = new SearchStudentController(searchStudentUseCase);

export { searchStudentController, searchStudentUseCase }