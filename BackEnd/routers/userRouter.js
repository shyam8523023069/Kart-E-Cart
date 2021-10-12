const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const data = require('../data');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async(req, res)=>{
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
}));

userRouter.get('/details',  (req, res, next) => {
    User.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'Error Boss...'
        })
    })
})

userRouter.post('/register', (req, res, next) => {
    User.findOne({email: req.body.email}, (err, login) => {
        if(login){
            res.status(404).send({message: "User already registerd..!"})
        } else {
            bcrypt.hash(req.body.password, 10, function (err,hashedPass){
                 if(err){
                     res.json({
                         error:err
                        })
                 }
                 let login = new User({
                     name: req.body.name,
                     email: req.body.email,
                     password: hashedPass,
                     isAdmin: req.body.phone
                 })
                 login.save()
                 .then(user =>{
                     res.json({
                         message: 'Register Details added sucess..!'
                     })
                 })
                 .catch(error =>{
                     res.status(404).json({
                         message:'Error Boss..!'
                     })
                 })
             })
            }
        })
    
})
 
userRouter.post('/', expressAsyncHandler(async(req, res, next) => {
   
    // var name = req.body.name
    var email= req.body.email
    var password = req.body.password
    User.findOne({ $or: [{email }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    
                    if (err) {
                        res.json({
                            error: err
                        })   
                    }
                    if (result) {
                        let token = jwt.sign({ name: user.name }, 'verySecretValue', { expiresIn: '1h' })
                        res.status(200).json({
                            name:user.name,
                            email:user.email,
                            message: 'User Login Successfully..!',
                            token
                        })
                    }
                    else {
                        res.status(404).json({
                            message: 'Password does not Matched..!'
                        })
                    }
                })
                    
                
            } else {
                res.status(404).json({
                    message: 'NO user found..!'
                })
            }
        })
    }))

module.exports= userRouter;

