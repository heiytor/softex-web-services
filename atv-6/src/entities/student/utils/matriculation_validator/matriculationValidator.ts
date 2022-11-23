const matriculationValidator = (matriculation: string): boolean => {
  try {
    if (+matriculation > 999999 || + matriculation < 111111) return false;

    return true;
  } catch (e) {
    throw new Error(`That matriculation is invalid.`)
  }
}

export { matriculationValidator };