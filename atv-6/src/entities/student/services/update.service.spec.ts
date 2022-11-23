import { describe, it, expect } from "vitest";
import { StudentRepository } from "../repositories/StudentRepository"
import { UpdateService } from "./update.service";

const createSut = () => new UpdateService(new StudentRepository());
const updateFields = () => {
  const n = Number(Math.floor(Math.random() * (99999 -  11111) + 11111));

  return {
    first_name: `Update Service`,
    last_name: `Test`,
    age: Number(Math.floor(Math.random() * (19 -  14) + 14)),
    classroom: Number(Math.floor(Math.random() * (14 -  2) + 2)),
  }
};
const validMatriculation = '578465';
const invalidMatriculation = 'AAAAAAAAAAAAAAAAAAAAAAAAAAA';


describe(`UpdateService`, () => {
  it(`should return an new error if the matriculation is invalid`, async () => {
    const { first_name, last_name, age, classroom } = updateFields();

    const sut = createSut();

    await expect(async () => { 
      await sut.execute(invalidMatriculation, {
        first_name,
        last_name,
        age,
        classroom,
      }); 
    }).rejects.toThrowError(`Maybe this student does not exist.`);
  });

  it(`should return an new error if first or last name are invalid`, async () => {
    const { age, classroom } = updateFields();
    
    const sut = createSut();

    await expect(async () => { 
      await sut.execute(validMatriculation, {
        first_name: 'invalid1',
        last_name: 'invalid1',
        age,
        classroom,
      }); 
    }).rejects.toThrowError(`That name is invalid.`);
  });
});
