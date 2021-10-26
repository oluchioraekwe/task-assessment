import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import itemRoute from "./Route";
import database from "./database/database";

database
  .sync()
  .then(() => console.log("Database is connected"))
  .catch(() => console.log("Database not connected"));

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api", cors(), itemRoute);

app.listen(port, () => {
  console.log(`Authentication service started on port ${port}`);
});
