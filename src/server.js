import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import path from "path";
const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);
// import { resolve, dirname } from "path";
// import { fileURLToPath } from "url";
// console.log("11111111111111111111111111", dirname);
// const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log("********************************", __dirname);
import cors from "cors";
const app = express();

env.config();
const PORT = process.env.PORT || 7000;

import userRoute from "../src/routes/User.js";
import postRoute from "../src/routes/Post.js";

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", () =>
  console.log("connection established..")
);
mongoose.connection.on("error", (err) => console.log("error connecting", err));

app.use("/api", userRoute);
app.use("/api", postRoute);
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    // res.sendFile(resolve(__dirname, "client", "build", "index.html"));
    // res.sendFile(import("../client/build"));
    // res.sendFile(`/app/client/build/index.html`);
  });
}

app.listen(PORT, () => {
  console.log("server started on port no:", PORT);
});
