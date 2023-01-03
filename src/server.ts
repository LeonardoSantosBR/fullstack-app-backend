import { app } from "./index";

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`--LISTENING ON PORT ${port}--`);
});
