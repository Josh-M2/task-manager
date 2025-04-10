import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import corsOptions from "./config/corsConfig.js";
import mongoose from "mongoose";
import { connectDB } from "./config/mongoDB.js";
import toDoRoutes from "./routes/todoRoutes.js";

dotenv.config();
const app = express();

app.use(cors(corsOptions));
app.use(express.json());

connectDB();

const port = process.env.PORT || 5174;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
