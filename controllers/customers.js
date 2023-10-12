const asyncHandler = require("express-async-handler");

//@desc Get All Customers
//@route GET /customers
//@access public
const getCustomers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Customers Successfully" });
});

//@desc Get Customer By Id
//@route GET /customers/:id
//@access public
const getCustomerById = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Get Customer By Id Successfully ${req.params.id}` });
});

//@desc Add Customer
//@route POST /customers
//@access public
const addCustomer = asyncHandler(async (req, res) => {
  console.log("New Customer data :", req.body);
  const { name, contact, address } = req.body;
  if (!name || !contact || !address) {
    res.status(400);
    throw new Error("All Fields must be filled");
  }
  res.status(201).json({ message: "Add Customer Successfully" });
});

//@desc Update Customer
//@route PUT /customers
//@access public
const updateCustomer = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Update Customer Successfully ${req.params.id}` });
});

//@desc Delete Customer
//@route DELETE /customers
//@access public
const deleteCustomer = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Delete Customer Successfully ${req.params.id}` });
});

module.exports = {
  getCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
