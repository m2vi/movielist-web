import { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../utils/dbConnect';

dbConnect();

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' });
};
