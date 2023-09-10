import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const decodeToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

