const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  type: String,
  laborCost: Number,
  materialCost: Number,
  duration: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Project", projectSchema);