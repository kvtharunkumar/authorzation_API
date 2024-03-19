const express = require("express");
const app = express();
const router = express.Router();

const { register } = require("../controllers/register");
router.post("/", register);
module.exports = router;
