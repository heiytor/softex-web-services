import { describe, it, expect } from 'vitest';
import { StudentRepository } from '../repositories/StudentRepository';
import { ShowService } from './show.service';

const createSut = () => new ShowService(new StudentRepository());
const matriculation = '243248';
const invalidMatriculation = 'AAAAAAAAAAAAAAAAAAAAAA';


describe(`showMany`, () => {
  it(`should return a data from the student table if matriculation is valid`, async () => {
    const sut = await createSut().execute(matriculation);

    expect(sut).toHaveProperty('matriculation', matriculation);
  });

  it(`should return an new error if matriculation is invalid`, async () => {
    const sut = createSut();

    await expect(async () => { 
      await sut.execute(invalidMatriculation); 
    }).rejects.toThrowError(`Maybe this student does not exist.`);
  });
});