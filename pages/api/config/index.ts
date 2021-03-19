import { NextApiRequest, NextApiResponse } from 'next';

import config from '../../../config/config.json';

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(JSON.stringify(config, null, 2));
};
