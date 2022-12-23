import express from "express";
import { config } from "dotenv";

config();
const App = express();
const port = process.env.PORT || 8000;

App.listen(port, () => {
  console.log(`--LISTENING ON PORT ${port}--`);
});
