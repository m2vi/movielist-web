import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import data from './data.json';

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body || !req.body?.type) {
    res.statusCode = 404;
    res.end('Missing arguments');
    return;
  }

  const type = req.body.type;
  const key = data?.key;

  const { username, password, token } = req.body;

  if (token.length === 0 && username.length + password.length >= 1) {
    res.json({
      token: jwt.sign(
        {
          username,
          password,
        },
        key
      ),
    });
  } else {
    res.json({
      token: jwt.sign(
        {
          token,
        },
        key
      ),
    });
  }
}
