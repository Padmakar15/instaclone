import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
// import a from "../../server/client/build/index.html";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
console.log("11111111111111111111111111", dirname);
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log("********************************", __dirname);
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    // res.sendFile(resolve(__dirname, "client", "build", "index.html"));
    res.sendFile(import("../client/build"));
    // res.sendFile(`/app/client/build/index.html`);
  });
}

app.listen(PORT, () => {
  console.log("server started on port no:", PORT);
});
