import dotenv from "dotenv";
import connectionDB from "./db/index.js";
dotenv.config({ path: "./env" });

connectionDB();

/*
first approch to connect database and start server

import Express from "express";
const app = Express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("ERROR: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("ERROR: ", err);
    throw err;
  }
})();
*/
