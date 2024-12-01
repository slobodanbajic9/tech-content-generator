import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

// Define a custom type for the global object to include our cached connection
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Declare the global cache variable
declare global {
  // Prevent TypeScript from complaining about duplicate declarations
  // by ensuring this is only declared once
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const globalCache: MongooseCache = global.mongoose || {
  conn: null,
  promise: null,
};

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (globalCache.conn) {
    return globalCache.conn;
  }

  if (!globalCache.promise) {
    globalCache.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongooseInstance) => mongooseInstance);
  }

  globalCache.conn = await globalCache.promise;
  global.mongoose = globalCache;

  return globalCache.conn;
}
