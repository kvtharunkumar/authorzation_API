const express = require("express");
const main = express();
const login = require("./routers/login");
const register = require("./routers/register");
const update = require("./routers/updateprofile");
const  deletion  = require("./routers/delete");
const view_profile = require("./routers/view_profile");

main.use(express.urlencoded({ extended: false }));
main.use(express.json());
main.use("/login", login);
main.use("/register", register);
main.use("/update", update);
main.use("/delete", deletion);
main.use('/view_profile',view_profile);

main.listen(4200, () => {
  console.log("server started");
});
