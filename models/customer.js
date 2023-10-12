const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please Add Name"] },
    email: { type: String, required: [true, "Please Add Email Address"] },
    phone: { type: String, required: [true, "Please Add Phone Number"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
