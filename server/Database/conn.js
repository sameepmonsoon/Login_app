import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
async function connect() {
  const mongod = await MongoMemoryServer.set();
  const getUri = mongod.getUri;
  const db = await mongoose.connect(getUri, mongoose.set("strictQuery", false));
  console.log("Database Connected");
  return db;
}
export default connect;
