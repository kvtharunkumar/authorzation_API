const connection = require("../mongo/connection");

const view_profile = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(200).send("please provide the name to view profile");
  }
  const collection = await connection();
  const user = await collection.findOne({ name: name });
  if (user) {
    const details = await collection.find({ name: name }).toArray();
    return res.status(200).json(user);
  }
  return res.status(200).send("user not exits");
};

module.exports = { view_profile };
