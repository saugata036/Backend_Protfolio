import dotenv from "dotenv";
import connectionDB from "./db/index.js";
import Express from "express";
dotenv.config({ path: "./.env" });

const app = Express();
connectionDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Server Error", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`✅ Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection Error: ", err);
  });

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
