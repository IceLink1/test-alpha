import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import productRouter from "./src/products/proudect.router.js";
import cors from "cors";

config();
const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", productRouter);

const bootstrap = async () => {
  try {
    await mongoose
      .connect(
        process.env.MONGO_DB ||
          "mongodb+srv://icelink39:9210369979Ash@cluster.kfcz2.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster"
      )
      .then(() => {
        console.log("Mongo Date Base connecting to Server!");
      });
    app.listen(port, () =>
      console.log(`Server app listening on port ${port}!`)
    );
  } catch (error) {
    console.error("Mongo Date Base con't connect to Server!", error.message);
  }
};

bootstrap();
