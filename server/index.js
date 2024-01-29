import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGODB);

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("Mongodb is connected."))
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
