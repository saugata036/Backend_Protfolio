import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    console.log(`/ Mongodb connected !! DB Host:  ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error("MongoDB Connection ERROR: ", err);
    process.exit(1);
  }
};

export default connectionDB;
