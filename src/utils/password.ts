import bcrypt from 'bcryptjs';

export const hashPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt);
}

export const checkPassword = (password: string, hashedPassword: string): boolean => {
  return bcrypt.compareSync(password, hashedPassword);
}