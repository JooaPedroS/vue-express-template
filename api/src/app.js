// principais
import express from "express";
import cors from "cors";
import morgan from "morgan";

// imports
import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/error.middleware.js";

// app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// rotas
app.use(routes);

app.use(errorHandler);


export default app;