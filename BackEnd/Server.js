// import express from 'express';
// import  mongoose  from 'mongoose';
// import data from './data.js';
// import userRouter from './routers/userRouter.js';

const express = require("express")
const mongoose =require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const data = require('./data')
const userRouter = require('./routers/userRouter')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb://localhost/KartEcart',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

app.use('/api/users', userRouter);
app.get('/', (req, res) =>{
    res.send('Server is Ready....')
});
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

app.get('/api/products/:id',(req, res)=>{
    const product = data.products.find((x)=>x._id === req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: 'Product Not Found'});
    }
});

app.get('/api/products', (req, res)=>{
    res.send(data.products)
} )



const port = process.env.PORT || 5000
app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`)
})