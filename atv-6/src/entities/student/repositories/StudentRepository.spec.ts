import { describe, expect, it } from 'vitest';
import { model } from '../../../database/model';
import { StudentRepository } from './StudentRepository';

const createSut = () => new StudentRepository();
const randomFields = () => {
  const n = Number(Math.floor(Math.random() * (99999 -  11111) + 11111));

  return {
    first_name: `Create Repository`,
    last_name: `Test`,
    age: Number(Math.floor(Math.random() * (19 -  14) + 14)),
    classroom: Number(Math.floor(Math.random() * (14 -  3) + 3)),
    matriculation: String(Math.floor(Math.random() * (999999 -  111111) + 111111)),
  }
};
const updateFields = () => {
  const n = Number(Math.floor(Math.random() * (99999 -  11111) + 11111));

  return {
    first_name: `Update Repository`,
    last_name: `Test`,
    age: Number(Math.floor(Math.random() * (19 -  14) + 14)),
    classroom: Number(Math.floor(Math.random() * (14 -  2) + 2)),
  }
};
const validMatriculation = '188245';
const invalidMatriculation = 'AAAAAAAAAAAAAAAAAAAAAA';


describe(`Student repository`, () => {
  describe(`showMany`, () => {
    it(`should return all data from the student table`, async () => {
      const sut = await createSut().showMany();

      expect(sut.length).toBeGreaterThanOrEqual(44);
    });
  });

  describe(`showUnique`, () => {
    it(`should return one data from the student table`, async () => {
      const sut = await createSut().showUnique(validMatriculation);

      expect(sut).toHaveProperty('matriculation', validMatriculation);
    });
  });

  describe(`exists`, () => {
    it(`should return a false value if the data does not exist`, async () => {
      const sut = await createSut().exists(invalidMatriculation);

      expect(sut).toEqual(false);
    });

    it(`should return a true value if the data exists`, async () => {
      const sut = await createSut().exists(validMatriculation);

      expect(sut).toEqual(true);
    });
  });

  describe(`save`, () => {
    it(`should create a new data`, async () => {
      const { first_name, last_name, age, classroom, matriculation} = randomFields();

      const sut = await createSut().save({
        first_name,
        last_name,
        age,
        classroom,
        matriculation,
      });

      expect(sut).toHaveProperty('first_name', first_name);
      expect(sut).toHaveProperty('last_name', last_name);
      expect(sut).toHaveProperty('age', age);
      expect(sut).toHaveProperty('classroom', classroom);
      expect(sut).toHaveProperty('matriculation', matriculation);
    });
  });

  describe(`update`, () => {
    it(`should update a data`, async () => {
      const { first_name, last_name, age, classroom } = updateFields();

      const sut = await createSut().update('648500', {
        first_name,
        last_name,
        age,
        classroom,
      });

      expect(sut).toHaveProperty('first_name', first_name);
      expect(sut).toHaveProperty('last_name', last_name);
      expect(sut).toHaveProperty('age', age);
      expect(sut).toHaveProperty('classroom', classroom);
      expect(sut).toHaveProperty('matriculation', '648500');
    });
  });

  describe(`delete`, () => {
    it(`should delete a data`, async () => {
      await model.student.create({
        data: {
          first_name: 'Seed',
          last_name: 'Data',
          age: 17,
          classroom: 8,
          matriculation: '514944',
        }
      });

      const sut = await createSut().delete('514944');

      expect(sut).toHaveProperty('matriculation', '514944');
    });
  });
});