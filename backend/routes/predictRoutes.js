const express = require("express");
const router = express.Router();

const predictCost = require("../ml/predictCost");

router.post("/", (req, res) => {
  const { laborCost, materialCost, duration } = req.body;

  const result = predictCost(laborCost, materialCost, duration);

  res.json({
    estimatedCost: result
  });
});

module.exports = router;