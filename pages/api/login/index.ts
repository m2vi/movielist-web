import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import tokenLayout from '../../../utils/token/layout';
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import dbSchema from '../../../models/userSchema';

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let user: any = await dbSchema.findOne({
      username: req.query.username.toString().toLowerCase(),
    });

    const output = tokenLayout(user);

    if (bcrypt.compareSync(req.query.password.toString(), user.password)) {
      const token = jwt.sign(
        {
          output,
        },
        process.env.jwtSecret,
        {
          expiresIn: '1d',
        }
      );

      res.status(200).json({ success: true, data: token });
    } else {
      res.status(403).json({ success: false, message: 'Wrong password!' });
    }
  } catch (err) {
    res.status(403).json({ success: false, message: 'Wrong House Fool' });
  }
};

//  TODO: CONFIRM THIS
