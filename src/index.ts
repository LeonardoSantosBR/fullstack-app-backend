import express from "express";
import { config } from "dotenv";
import { router } from "./routes/user-routes/routes";
import cors from "cors";

config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

export { app };
