const nameValidator = (name: string | string[]): boolean => {
  const format = /[`!@#$%^&*()_+\-0123456789=\[\]{};':"\\|,.<>\/?~]/;

  if (Array.isArray(name)) {
    for (const n of name) {
      if (n.length > 20 || n.length < 3) return false;

      if (format.test(n)) return false;
    }
  } else {
    if (name.length > 20 || name.length < 3) return false;

    if (format.test(name)) return false;
  }


  return true;
}

export { nameValidator };