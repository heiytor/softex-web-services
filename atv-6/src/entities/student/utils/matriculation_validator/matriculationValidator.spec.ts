import { describe, expect, it } from "vitest";
import { matriculationValidator } from "./matriculationValidator";

const createSut = (matriculation: string) => matriculationValidator(matriculation);

describe(`matriculationValidator`, () => {
  it(`should return false if matriculation is greater than 999999`, () => {
    const sut = createSut('9999999');

    expect(sut).toEqual(false);
  });

  it(`should return false if age is less than 111111`, () => {
    const sut = createSut('11111');

    expect(sut).toEqual(false);
  });

  it(`should return true if age is between 999999 and 111111`, () => {
    const sut = createSut(String(Math.floor(Math.random() * (999999 -  111111) + 111111)));

    expect(sut).toEqual(true);
  });
});