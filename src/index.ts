import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { Pool } from "pg";
import { errorHandler } from "./controllers/errors";
import { notFoundHandler } from "./controllers/not-found";
import { todosController } from "./controllers/todos";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const connectionString =
  "postgres://postgres@127.0.0.1:5432/todo_services_nodejs_development";

const pool = new Pool({
  connectionString,
});

pool.query("SELECT NOW() as now", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.rows[0]);
  }
  pool.end();
});

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
