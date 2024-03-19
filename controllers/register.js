const bcrypt = require("bcrypt");
const connection = require("../mongo/connection");
const register = async (req, res) => {
  try {
    const collection = await connection();
    const { name, password } = req.body;
    const exist_user = await collection.findOne({ name: name });
    if (exist_user) {
      res.status(200).send("user name already exists");
    } else {
      const hashed_password = await bcrypt.hash(password, 10);
      await collection.insertOne({ name: name, password: hashed_password });
      return res.status(200).send("registered sucessfully");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { register };
