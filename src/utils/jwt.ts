import jwt from 'jsonwebtoken';


interface User {
  employeeNo: string,
  role: string
}

export const generateToken = async (user: User): Promise<string> => {
  const token = await jwt.sign(
    user,
    process.env.JWT_SECRET as string,
    { expiresIn: '2d'});
  return token;
}

export const verifyToken = async (token: string): Promise<string | object | undefined> => {
  let decoded;
  try {
    decoded = await jwt.verify(
      token,
      process.env.JWT_SECRET as string);
  } catch(err) {
    console.error(err);
  }
  return decoded;
}