import { IStudentRepository } from "../repositories/IStudentRepository";
import { Student } from "../types/Student";

class IndexService {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(): Promise<Student[]> {
    const students: Student[] = await this.studentRepository.showMany();

    return students;
  }
}

export { IndexService };
