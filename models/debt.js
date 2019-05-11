const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DebtSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  description: {
    type: String,
    required: true,
  },
  qfatura: {
    type: Number,
    required: true
  },
  vfatura: {
    type: Date,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
});

module.exports = Debt = mongoose.model("debt", DebtSchema);
