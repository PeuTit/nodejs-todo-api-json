import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { errorHandler } from "./controllers/errors";
import { notFoundHandler } from "./controllers/not-found";
import { todosController } from "./controllers/todos";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Controllers
app.get("/", (_req, res) => {
  res.status(200).json({ status: "healthy" });
});
app.use("/todos", todosController);

// Errors handler
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
