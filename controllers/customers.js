const asyncHandler = require("express-async-handler");
const Customer = require("../models/customer");

//@desc Get All Customers
//@route GET /customers
//@access private
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find({ user_id: req.user.id });
  res.status(200).json(customers);
});

//@desc Get Customer By Id
//@route GET /customers/:id
//@access private
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
//@access private
const addCustomer = asyncHandler(async (req, res) => {
  console.log("New Customer data :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields must be filled");
  }
  const customer = await Customer.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(customer);
});

//@desc Update Customer
//@route PUT /customers
//@access private
const updateCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (customer.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other users data");
  }
  const updatedCustomer = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedCustomer);
});

//@desc Delete Customer
//@route DELETE /customers
//@access private
const deleteCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (customer.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other users data");
  }
  await Customer.deleteOne({ _id: req.params.id });
  res.status(200).json(customer);
});

module.exports = {
  getCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
