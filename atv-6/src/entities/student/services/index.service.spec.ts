import { describe, it, expect } from 'vitest';
import { StudentRepository } from '../repositories/StudentRepository';
import { IndexService } from './index.service';

const createSut = () => new IndexService(new StudentRepository());

describe(`showMany`, () => {
  it(`should return all data from the student table`, async () => {
    const sut = await createSut().execute();

    expect(sut.length).toBeGreaterThanOrEqual(44);
  });
});