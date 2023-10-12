const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    name: { type: string, required: [true, "Please Add Name"] },
    email: { type: string, required: [true, "Please Add Email Address"] },
    phone: { type: string, required: [true, "Please Add Phone Number"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("customers", customerSchema);
