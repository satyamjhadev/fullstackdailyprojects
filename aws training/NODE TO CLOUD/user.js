const express=require("express");

const router =express.Router();
const AWS=require("aws-sdk");

aws.config.update({
  region:'us-east-2'
});

const dynmodb=new AWS.DynamoDB.DocumentClient();
const dynmodbTableName='users';

Router.get('/all',async(req,res)=>{
  const params={
    TableName:dynmodbTableName
  }
  try{
    const allUsers=await scanDynamodbrecord(params,[]);
    const body ={
      users:allUsers
    }
    res.json(body):
  }
  catch(err){
    throw new Error(err);


  }
})