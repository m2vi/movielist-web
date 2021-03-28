import jwt from 'jsonwebtoken';

import dbConnect from '../../../utils/dbConnect';
import dbSchema from '../../../models/userSchema';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const user = dbSchema.find({});

        res.status(200).json({ success: true, data: user });
      } catch (err) {
        res.status(400).json({ success: false, error: err });
      }
      break;
    case 'POST':
      try {
        const note = await dbSchema.create(req.body);

        res.status(201).json({ success: true, data: note });
      } catch (err) {
        res.status(400).json({ success: false, message: 'Bad Request' });
      }
      break;
    default:
      res.status(400).json({
        success: false,
        message: 'Unsupported request type was used.',
      });
      break;
  }
};

// if (token.length === 0 && username.length + password.length >= 1) {
//   res.json({
//     token: jwt.sign(
//       {
//         username,
//         password,
//       },
//       'JWT'
//     ),
//   });
// } else {
//   res.json({
//     success: true,
//     data: {
//       token: jwt.sign(
//         {
//           token,
//         },
//         'JWT'
//       ),
//     },
//   });
// }
