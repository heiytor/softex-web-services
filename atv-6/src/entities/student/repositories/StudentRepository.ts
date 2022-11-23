import { model } from "../../../database/model";
import { SaveStudent } from "../types/SaveStudent";
import { Student } from "../types/Student";
import { UpdateStudent } from "../types/UpdateStudent";
import { studentMapper } from "../utils/mapper";
import { IStudentRepository } from "./IStudentRepository";

class StudentRepository implements IStudentRepository {
  // returns an array with all elements from the student table
  async showMany(): Promise<Student[]> {
    // makes a map to convert the type
    const students: Student[] = studentMapper(await model.student.findMany());

    return students;
  }

  // returns one element from the student table
  async showUnique(matriculation: string): Promise<Student> {
    const student: Student = await model.student.findUnique({ 
      where: { matriculation }
    })

    return student;
  }

  // check if the element already exists in the table
  async exists(matriculation: string): Promise<boolean> {
    const student: Student = await model.student.findUnique({ 
      where: { matriculation }
    })

    // if exists, return true
    if (student) return true;

    // else, return false
    return false;
  }

  // save a new data in the table, then returns that new data
  async save({
    first_name, 
    last_name, 
    age, 
    classroom, 
    matriculation 
  }: SaveStudent): Promise<Student> {
    const student: Student = await model.student.create({
      data: {
        first_name,
        last_name,
        age,
        classroom,
        matriculation
      }
    });

    return student;
  }

  // update a data in the table based on the sent fields, then returns that data
  async update(matriculation: string, { 
    first_name, 
    last_name,
    age, 
    classroom, 
  }: UpdateStudent): Promise<Student> {
    if (first_name) {
      await model.student.update({ 
        where: { matriculation }, 
        data: { first_name }
      });
    }

    if (last_name) {
      await model.student.update({ 
        where: { matriculation }, 
        data: { last_name }
      });
    }

    if (age) {
      await model.student.update({ 
        where: { matriculation }, 
        data: { age }
      });
    }

    if (classroom) {
      await model.student.update({ 
        where: { matriculation }, 
        data: { classroom }
      });
    }

    const student: Student = await model.student.findUnique({ 
      where: { matriculation } 
    });

    return student
  }

  // delete a data from the student table
  async delete(matriculation: string): Promise<Student> {
    const student: Student = await model.student.delete({ 
      where: { matriculation } 
    });

    return student
  }
}

export { StudentRepository };