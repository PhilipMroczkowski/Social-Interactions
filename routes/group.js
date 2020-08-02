var express = require("express");
var router = express.Router();

var ctrlTestCrypto = require("../controllers/test.controller");

//test
router
  .route("/test")
    .get(ctrlTestCrypto.testTestCrypto)

module.exports = router;