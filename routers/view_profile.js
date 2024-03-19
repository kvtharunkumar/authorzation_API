const express = require("express");
const app = express();
const router = express.Router();
const { view_profile } = require("../controllers/view_profile");

router.get("/", view_profile);

module.exports = router;
