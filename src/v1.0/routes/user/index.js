const router = require("express").Router();
const commentManagement = require("./comment");
const cartManagement = require("./cart");
const productManagement = require("./product");
const wishlistManagement = require("./wishList");


router.use("/product", productManagement);
router.use("/comment", commentManagement);
router.use("/cart", cartManagement);
router.use("/wishlist", wishlistManagement);

module.exports = router;