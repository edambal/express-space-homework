const express = require('express');
const router = express.Router();

const marsM = require('../models/marsMissions');

router.get('/',(req,res)=>{
    res.send("This is what it is");
})

router.get('/missions',(req,res)=>{
    res.render('index',{
        missions : marsM
    })
});

module.exports = router;