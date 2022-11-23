const classroomValidator = (classroom: number) => {
  if (classroom < 2 || classroom > 14) return false;
  
  return true;
}

export { classroomValidator };