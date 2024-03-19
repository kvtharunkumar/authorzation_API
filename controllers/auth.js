const connection = require("../mongo/connection");
const bcrypt = require("bcrypt");
const login = async (req, res) => {
  try {
    const { name, password } = req.body;
    const collection = await connection();

    const user = await collection.findOne({ name: name });
    if (!user) {
      res.status(200).send("user not found");
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.status(200).send("user login succesful");
      }
      return res.status(200).send("password invalid");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { login };
