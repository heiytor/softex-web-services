import { describe, it, expect } from "vitest";
import { StudentRepository } from "../repositories/StudentRepository"
import { CreateService } from "./create.service"

const createSut = () => new CreateService(new StudentRepository());
const randomFields = () => {
  const n = Number(Math.floor(Math.random() * (99999 - 11111) + 11111));

  return {
    first_name: `Create Service`,
    last_name: `Test`,
    age: Number(Math.floor(Math.random() * (18 - 15) + 15)),
    classroom: Number(Math.floor(Math.random() * (10 - 4) + 4)),
    matriculation: String(Math.floor(Math.random() * (999999 - 111111) + 111111)),
  }
};
const matriculation = '949811';

describe(`CreateService`, () => {
  it(`should return an new error if the matriculation already exists`, async () => {
    const { first_name, last_name, age, classroom } = randomFields();

    const sut = createSut();

    await expect(async () => {
      await sut.execute({
        first_name,
        last_name,
        age,
        classroom,
        matriculation
      });
    }).rejects.toThrowError(`Maybe this student already exists.`);

  })

  it(`should return an new error if first or last name are invalid`, async () => {
    const { age, classroom, matriculation } = randomFields();

    const sut = createSut();

    await expect(async () => {
      await sut.execute({
        first_name: 'invalid1',
        last_name: 'invalid1',
        age,
        classroom,
        matriculation
      });
    }).rejects.toThrowError(`That name is invalid.`);
  });

  it(`should return an new error if classroom is invalid`, async () => {
    const { first_name, last_name, age, matriculation } = randomFields();
    const classroom = 0

    const sut = createSut();

    await expect(async () => {
      await sut.execute({
        first_name,
        last_name,
        age,
        classroom,
        matriculation
      });
    }).rejects.toThrowError(`That classroom is invalid.`);
  });

  it(`should return an new error if matriculation is invalid`, async () => {
    const { first_name, last_name, age, classroom } = randomFields();
    const matriculation = '0'

    const sut = createSut();

    await expect(async () => {
      await sut.execute({
        first_name,
        last_name,
        age,
        classroom,
        matriculation
      });
    }).rejects.toThrowError(`That matriculation is invalid.`);
  });
});