var express = require("express");
var cryptoController = require("../controllers/crypto_controller");
// var cartProductsController = require("../controllers/cartproducts_controller");
// var wishlistProductsController = require("../controllers/wishlistproducts_controller");

var router = express.Router();

router.get("/cryptoData/:symbol", cryptoController.getCryptoProducts);
router.post("/cryptoData", cryptoController.postCryptoProducts);
// router.get("/product/:id", cheersProductsController.getSelectedProduct);
// router.post("/cart", cartProductsController.postCartProduct);
// router.get("/cart", cartProductsController.getCartProducts);
// router.post("/wishlist", wishlistProductsController.postWishlistProduct);
// router.get("/wishlist", wishlistProductsController.getWishlistProducts);

module.exports = router;