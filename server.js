import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import dbConfig from "./config/db.js";
import movieRouter from "./routes/movies.route.js";

const app = express();
dbConfig();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", movieRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
