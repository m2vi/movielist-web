import jwt from 'jsonwebtoken';

export default (token: string) => {
  try {
    jwt.verify(token, process.env.jwtSecret);
    return [true, 'good-token'];
  } catch (err) {
    return [false, 'bad-token'];
  }
};
