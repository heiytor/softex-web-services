import { SaveStudent } from "../types/SaveStudent"
import { Student } from "../types/Student"
import { UpdateStudent } from "../types/UpdateStudent"

interface IStudentRepository {
  showMany(): Promise<Student[]>

  showUnique(matriculation: string): Promise<Student>
  
  exists(matriculation: string): Promise<boolean>
  
  save({
    first_name,
    last_name,
    age,
    classroom,
    matriculation
  }: SaveStudent): Promise<Student>
  
  update(matriculation: string, {
    first_name,
    last_name,
    age,
    classroom,
  }: UpdateStudent): Promise<Student>
  
  delete(matriculation: string): Promise<Student>
}

export { IStudentRepository };