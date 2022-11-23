import { describe, expect, it } from "vitest";
import { ageValidator } from "./ageValidator";

const createSut = (age: number) => ageValidator(age);

describe(`ageValidator`, () => {
  it(`should return false if age is greater than 19`, () => {
    const sut = createSut(20);

    expect(sut).toEqual(false);
  });

  it(`should return false if age is less than 14`, () => {
    const sut = createSut(13);

    expect(sut).toEqual(false);
  });

  it(`should return true if age is between 19 and 13`, () => {
    const sut = createSut(17);

    expect(sut).toEqual(true);
  });
});