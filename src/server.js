const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
const app = express();

env.config();
const PORT = process.env.PORT || 7000;

const userRoute = require("../src/routes/User");
const postRoute = require("../src/routes/Post");

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
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("server started on port no:", PORT);
});
