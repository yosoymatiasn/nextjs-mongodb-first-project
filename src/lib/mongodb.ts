import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

let mongooseInstance: Mongoose;

async function dbConnect(): Promise<Mongoose> {
  if (process.env.NODE_ENV === 'development') {
    if (!(global as any).mongoose) {
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
      };
      (global as any).mongoose = await mongoose.connect(MONGODB_URI, options);
    }
    return (global as any).mongoose;
  }

  if (!mongooseInstance || mongooseInstance.connection.readyState !== 1) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };
    mongooseInstance = await mongoose.connect(MONGODB_URI, options);
  }

  return mongooseInstance;
}

export default dbConnect;
