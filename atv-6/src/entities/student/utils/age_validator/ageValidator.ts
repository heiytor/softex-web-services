const ageValidator = (age: number) => {
  if (age < 14 || age > 19) return false;
  
  return true;
}

export { ageValidator };