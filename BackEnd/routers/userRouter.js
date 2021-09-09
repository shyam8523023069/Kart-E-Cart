// import express from 'express';
// import expressAsyncHandler from 'express-async-handler';
// import data from '../data.js';
// import User from '../models/userModel.js';
const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const data = require('../data');
const User = require('../models/userModel');

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async(req, res)=>{
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
}));

// export default userRouter;
module.exports= userRouter;