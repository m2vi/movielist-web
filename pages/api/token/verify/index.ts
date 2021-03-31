import verifyToken from '../../../../utils/token/verify';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = req.query.token.toString();

    const vToken = verifyToken(token);

    res
      .status(vToken[0] ? 200 : 403)
      .json({ success: vToken[0], message: vToken[1] });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Bad Request!' });
  }
};

//TODO  CONFIRM THIS
//? should work now
