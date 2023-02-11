const express = require("express");
const { userAdd } = require("../controllers/user.controller");

const router = express.Router();

router.route("/add").post(userAdd);

module.exports = router;
