const { MongoClient } = require("mongodb");
const uri =
  "";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function connection() {
  try {
    await client.connect();
    console.log("connected to database");
    const database = client.db("");
    const collection = database.collection("coustmers");

    return collection;
  } catch (err) {
    console.log(err);
  }
}
module.exports = connection;
