const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

const razorpayRoutes = require("./razorpayapi");

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api", razorpayRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is up and running on port 5000");
});
