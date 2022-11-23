import { describe, expect, it } from "vitest";
import { classroomValidator } from "./classroomValidator";

const createSut = (classroom: number) => classroomValidator(classroom);

describe(`classroomValidator`, () => {
  it(`should return false if classroom is greater than 14`, () => {
    const sut = createSut(15);

    expect(sut).toEqual(false);
  });

  it(`should return false if classroom is less than 1`, () => {
    const sut = createSut(0);

    expect(sut).toEqual(false);
  });

  it(`should return true if classroom is between 14 and 1`, () => {
    const sut = createSut(10);

    expect(sut).toEqual(true);
  });
});