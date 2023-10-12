const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.get("/customers", (req, res) => {
//   res.status(200).json({ message: "Get Customers Successfully" });
// });

//Middleware
app.use(express.json());

app.use("/customers", require("./routes/customers"));

app.use(errorHandler);
