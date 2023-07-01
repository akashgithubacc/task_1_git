import express from "express";
import bodyParser from "body-parser";
import router from "./router/posts.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());
app.use("/", router);

const PORT = 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    })
  )
  .catch((error) => console.log(error));
