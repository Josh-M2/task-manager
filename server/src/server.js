import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import corsOptions from "./config/corsConfig.js";

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT || 5174;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
