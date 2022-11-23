import { describe, expect, it } from "vitest";
import { nameValidator } from "./nameValidator";

const createSut = (name: string | string[]) => nameValidator(name);

describe(`nameValidator`, () => {
  it(`should return false if name is less than 3 characters`, () => {
    const sut = createSut('He');

    expect(sut).toEqual(false);
  });

  it(`should return false if names are less than 3 characters`, () => {
    const sut = createSut(['He', 'Da', 'Si', 'Ba']);

    expect(sut).toEqual(false);
  });

  it(`should return false if one of the names are less than 3 characters`, () => {
    const sut = createSut(['Heitor', 'Danilo', 'Si', 'Barros']);

    expect(sut).toEqual(false);
  });

  it(`should return false if name is greater than 20 characters`, () => {
    const sut = createSut('Hefdsiohfsdfhasdufiasdhfioasdd');

    expect(sut).toEqual(false);
  });

  it(`should return false if names are greater than 20 characters`, () => {
    const sut = createSut(['Hegfdgsdfgdfg',
      'fdsfsdfsdaDafasdfasdfasdfs', 
      'fsdafsdfsafasdfasdfsSi', 
      'fsdsdfasdfasdfasddfasBa']);

    expect(sut).toEqual(false);
  });

  it(`should return false if one of the names are greater than 20 characters`, () => {
    const sut = createSut(['Heitor', 'Danilo', 'Sifdsfsdafasfsdfsdfasdfasfasfffs', 'Barros']);

    expect(sut).toEqual(false);
  });

  it(`should return false if name has special characters`, () => {
    const sut = createSut('Heitor!');

    expect(sut).toEqual(false);
  });

  it(`should return false if names have special characters`, () => {
    const sut = createSut(['Heitor!', 'Danilo!', 'Silva@', 'Barros#']);

    expect(sut).toEqual(false);
  });

  it(`should return false if one of the names have special characters`, () => {
    const sut = createSut(['Heitor', 'Danilo', 'Silva@', 'Barros']);

    expect(sut).toEqual(false);
  });

  it(`should return false if name has numbers`, () => {
    const sut = createSut('Heitor1');

    expect(sut).toEqual(false);
  });

  it(`should return false if names have numbers`, () => {
    const sut = createSut(['Heitor1', 'Danilo2', 'Silva3', 'Barros4']);

    expect(sut).toEqual(false);
  });

  it(`should return false if one of the names have numbers`, () => {
    const sut = createSut(['Heitor', 'Danilo', 'Silva3', 'Barros']);

    expect(sut).toEqual(false);
  });

  it(`should return true if name is valid`, () => {
    const sut = createSut('Heitor Danilo');

    expect(sut).toEqual(true);
  });

  it(`should return true if names are valid`, () => {
    const sut = createSut(['Heitor', 'Danilo', 'Silva', 'Barros']);

    expect(sut).toEqual(true);
  });
});