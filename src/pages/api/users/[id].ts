import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // try {
  //   const { id } = req.query;
  //   const client = await clientPromise();
  //   // const db = client.
  //   const movies = db.collection('movies');
  //   const movie = await movies.findOne({ _id: new ObjectId(id as string) });
  //   res.json(movie);
  // } catch (e) {
  //   console.error(e);
  // }
};
