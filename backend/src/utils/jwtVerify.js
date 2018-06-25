import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

export default (token) => {
  try {
    const data = jwt.verify(token.replace('Bareer ', ''), JWT_SECRET);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
