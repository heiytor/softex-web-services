import { IStudentRepository } from "../repositories/IStudentRepository";
import { SaveStudent } from "../types/SaveStudent";
import { Student } from "../types/Student";
import { ageValidator } from "../utils/age_validator/ageValidator";
import { classroomValidator } from "../utils/classroom_validator/classroomValidator";
import { matriculationValidator } from "../utils/matriculation_validator/matriculationValidator";
import { nameValidator } from "../utils/name_validator/nameValidator";

class CreateService {
  constructor(private studentRepository: IStudentRepository) {}

  async execute({
    first_name,
    last_name,
    age,
    classroom,
    matriculation
  }: SaveStudent): Promise<Student> {
    const exist = await this.studentRepository.exists(matriculation);

    if (exist) throw new Error(`Maybe this student already exists.`);

    if (!nameValidator([first_name, last_name])) {
      throw new Error(`That name is invalid.`)
    }

    if (!ageValidator(age)) throw new Error(`That age is invalid.`);

    if (!classroomValidator(classroom)) {
      throw new Error(`That classroom is invalid.`)
    };

    if (!matriculationValidator(matriculation)) {
      throw new Error(`That matriculation is invalid.`)
    }

    const student: Student = await this.studentRepository.save({
      first_name,
      last_name,
      age,
      classroom,
      matriculation
    })

    return student;
  }
}

export { CreateService };