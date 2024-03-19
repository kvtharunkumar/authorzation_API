const express = require("express");
const app = express();
const router = express.Router();
const { login } = require("../controllers/auth");

router.post("/", login);

module.exports = router;
