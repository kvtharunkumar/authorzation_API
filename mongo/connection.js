const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://tharun:tharun123@cluster0.okkoxqs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function connection() {
  try {
    await client.connect();
    console.log("connected to database");
    const database = client.db("mlstudio");
    const collection = database.collection("coustmers");

    return collection;
  } catch (err) {
    console.log(err);
  }
}
module.exports = connection;
