import { IStudentRepository } from "../repositories/IStudentRepository";
import { Student } from "../types/Student";
import { UpdateStudent } from "../types/UpdateStudent";
import { ageValidator } from "../utils/age_validator/ageValidator";
import { classroomValidator } from "../utils/classroom_validator/classroomValidator";
import { nameValidator } from "../utils/name_validator/nameValidator";

class UpdateService {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(matriculation: string, {
    first_name,
    last_name,
    age,
    classroom,
  }: UpdateStudent): Promise<Student> {
    const exist = await this.studentRepository.exists(matriculation);

    if (!exist) throw new Error(`Maybe this student does not exist.`);

    if (first_name) {
      if(!nameValidator(first_name)) throw new Error(`That name is invalid.`);

      await this.studentRepository.update(matriculation, { first_name });
    }

    if (last_name) {
      if(!nameValidator(last_name)) throw new Error(`That name is invalid.`);

      await this.studentRepository.update(matriculation, { last_name });
    }

    if (age) {
      if(!ageValidator(age)) throw new Error(`That age is invalid.`);

      await this.studentRepository.update(matriculation, { age });
    }

    if (classroom) {
      if(!classroomValidator(classroom)) {
        throw new Error(`That classroom is invalid.`);
      }

      await this.studentRepository.update(matriculation, { classroom }); 
    }

    const student: Student = await this.studentRepository.showUnique(matriculation);
    
    return student;
  }
}

export { UpdateService };