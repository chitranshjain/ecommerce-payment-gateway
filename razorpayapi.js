const dotenv = require("dotenv");
const express = require("express");
const Razorpay = require("razorpay");
const { v4: uuidv4 } = require("uuid");

dotenv.config();

const razorpayInstance = new Razorpay({
  key_id: process.env.APIKEY,
  key_secret: process.env.APISECRET,
});

const router = express.Router();

router.post("/", (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount,
    currency: "INR",
    receipt: uuidv4(),
  };

  razorpayInstance.orders.create(options, (err, order) => {
    if (err) {
      res.status(500).json({ message: "An error occurred" });
    } else {
      res
        .status(200)
        .json({ message: "Order placed successfully", order: order });
    }
  });
});

module.exports = router;
