const connection=require('../mongo/connection');

const deletion= async(req,res)=>
{
    const{name}=req.body;
    if(!name)
    {
        res.status(200).send('plaese provide username to delete');
    }
    const collection= await connection();
    const user=await collection.findOne({name:name});
    if(user)
    {
        collection.deleteOne({name:name});
        return res.status(200).send("deleted sucessfully");
    }
}

module.exports={deletion};