import { Schema, model, models, Document, Model } from 'mongoose';

export interface IUser {
  username: string;
  age: number;
  email: string;
  createdAt: Date;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema<IUserModel>(
  {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export default (models.User ||
  (model<IUserModel>(
    'User',
    UserSchema,
  ) as Model<IUserModel>)) as Model<IUserModel>;
