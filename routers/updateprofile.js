const express = require("express");
const app = express();
const router = express.Router();
const { update } = require("../controllers/updateprofile");

router.put("/",update);

module.exports = router;
