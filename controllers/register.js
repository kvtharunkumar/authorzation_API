const connection=require('../mongo/connection');
const bcrypt=require('bcrypt')

const register= async(req,res)=>
{
  try{
    const {name,password}= req.body;
    if(!name || !password)
    {
      return res.status(400).send("plesae enter the name and pass");
    }
    const collection=await connection();
    const user=await collection.findOne({name:name})
    if(user)
    {
      return res.status(200).send("user already exists");
    }
    const hashpass= await bcrypt.hash(password,10);
    collection.insertOne({name:name,password:hashpass});
    return res.status(200).send("registerd suceesufully");


  }
  catch(err)
  {
    res.status(400).send(err);
  }
}

module.exports={register};