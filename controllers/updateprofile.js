const bcrypt=require('bcrypt')
const connection=require('../mongo/connection');
const update=async (req,res)=>
{
    const {name,password}=req.body;
    if(!name || !password)
    {
        res.status(200).send("please provide name and password");
    }

    const collection=await connection();
    const user=await collection.findOne({name:name});
    if(!user)
    {
        res.status(200).send("user not exists, please register first");
    }
    const hashed_password = await bcrypt.hash(password, 10);
    await collection.updateOne(
      { name: name }, 
      { $set: { password: hashed_password} } 
    );
     res.status(200).send("updated  sucessfully");
    

}

module.exports={update};