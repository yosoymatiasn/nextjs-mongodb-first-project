import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import User, { IUserModel } from '@/models/User';
import mongoose from 'mongoose';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dbConnect();

    switch (req.method) {
      case 'GET':
        try {
          const users = await User.find({});
          res.status(200).json({ success: true, data: users });
        } catch (err) {
          console.log(err);
          res.status(400).json({ success: false });
        }
        break;
      case 'POST':
        try {
          const user = await User.create(
            req.body,
          ); /* create a new model in the database */
          res.status(201).json({ success: true, data: user });
        } catch (err) {
          console.log(err);
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
    }
  } catch (e) {
    console.error(e);
  }
};
