const asyncHandler = require("express-async-handler");
const Customer = require("../models/customer");

//@desc Get All Customers
//@route GET /customers
//@access public
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find();
  res.status(200).json(customers);
});

//@desc Get Customer By Id
//@route GET /customers/:id
//@access public
const getCustomerById = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json(customer);
});

//@desc Add Customer
//@route POST /customers
//@access public
const addCustomer = asyncHandler(async (req, res) => {
  console.log("New Customer data :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields must be filled");
  }
  const customer = await Customer.create({ name, email, phone });
  res.status(201).json(customer);
});

//@desc Update Customer
//@route PUT /customers
//@access public
const updateCustomer = asyncHandler(async (req, res) => {
  const updatedCustomer = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedCustomer);
});

//@desc Delete Customer
//@route DELETE /customers
//@access public
const deleteCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Customer.deleteOne();
  res.status(200).json(customer);
});

module.exports = {
  getCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
