import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

export default (token) => {
  try {
    const data = jwt.verify(token, JWT_SECRET);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
