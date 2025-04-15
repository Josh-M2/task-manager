import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import corsOptions from "./config/corsConfig.js";
import { connectDB } from "./config/mongoDB.js";
import toDoRoutes from "./routes/todoRoutes.js";
import { initServer } from "./config/socketIO.js";
import http from "http";

dotenv.config();
const app = express();
const server = http.createServer(app);

const socket = initServer(server);

app.use(cors(corsOptions));
app.use(express.json());

connectDB();

app.set("socket", socket);
app.use("/api/todos", toDoRoutes);

const port = process.env.PORT || 5174;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
