import { Student as StudentModel } from "@prisma/client";
import { Student } from "../types/Student";

const studentMapper = (students: StudentModel[]): Student[] => {
  const newArray: Student[] = [];

  for (const student of students) {
    newArray.push({
      id: student.id,
      first_name: student.first_name,
      last_name: student.last_name,
      age: student.age,
      classroom: student.classroom,
      matriculation: student.matriculation,
    })
  }

  return newArray;
}

export { studentMapper };