const {deletion} =require('../controllers/delete')
const express=require('express');
const router=express.Router();

router.delete('/',deletion);

module.exports=router;
