const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");

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

app.use(cors());

// app.use(
//   cors({
//     origin: "",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use("/customers", require("./routes/customers"));

app.use("/users", require("./routes/user"));

app.use(errorHandler);
