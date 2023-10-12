const express = require("express");
const {
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  addCustomer,
} = require("../controllers/customers");
const router = express.Router();

// router.get("/", getCustomers);

// router.get("/:id", getCustomerById);

// router.post("/", addCustomer);

// router.put("/:id", updateCustomer);

// router.delete("/:id", deleteCustomer);

router.route("/").get(getCustomers).post(addCustomer);

router
  .route("/:id")
  .get(getCustomerById)
  .put(updateCustomer)
  .delete(deleteCustomer);

module.exports = router;