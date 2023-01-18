import { StudentRepository } from "../../repositories/implementations/StudentRepositoty";
import { CreateStudentController } from "./createStudentController";
import { CreateStudentUseCase } from "./createStudentUseCase";

const studentRepository = new StudentRepository()

const createStudentUseCase = new CreateStudentUseCase(studentRepository);

const createStudentController = new CreateStudentController(createStudentUseCase);

export { createStudentController, createStudentUseCase }