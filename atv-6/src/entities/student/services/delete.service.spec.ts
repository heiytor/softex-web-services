import { describe, it, expect } from "vitest";
import { model } from "../../../database/model";
import { StudentRepository } from "../repositories/StudentRepository"
import { DeleteService } from "./delete.service"

const createSut = () => new DeleteService(new StudentRepository());
const validMatriculation = '139504'
const invalidMatriculation = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'

describe(`Delete Service`, () => {
  it(`should return an new error if matriculation is invalid`, async () => {
    const sut = createSut();

    await expect(async () => { 
      await sut.execute(invalidMatriculation)
    }).rejects.toThrowError(`Maybe this student does not exist.`);
  });

  it(`should delete and return an student if matriculation is valid`, async () => {
    const sut = await createSut().execute(validMatriculation);

    expect(sut).toHaveProperty('matriculation', validMatriculation);

    await model.student.create({
      data: {
        first_name: 'Seed',
        last_name: 'Data',
        age: 16,
        classroom: 4,
        matriculation: validMatriculation,
      }
    });
  });
});