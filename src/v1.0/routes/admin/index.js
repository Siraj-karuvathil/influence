const router = require("express").Router();
const ProductManagment = require("./product");
const userManagement = require("./user");
const commentManagement = require("./comment");

router.use("/product", ProductManagment);
router.use("/user", userManagement);
router.use("/comment", commentManagement);

module.exports = router;