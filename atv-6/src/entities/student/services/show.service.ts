import { IStudentRepository } from "../repositories/IStudentRepository";
import { Student } from "../types/Student";

class ShowService {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(matriculation: string): Promise<Student> {
    const exist = await this.studentRepository.exists(matriculation);

    if (!exist) throw new Error(`Maybe this student does not exist.`);

    const student: Student = await this.studentRepository.showUnique(matriculation);

    return student;
  }
}

export { ShowService };