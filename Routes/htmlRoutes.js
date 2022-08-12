const path = require('path');
const router = require('express').Router();
 
//Routes used to render HTML Files
router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../index.html'));
})

router.get('/contact', (req,res)=>{
    res.sendFile(path.join(__dirname, '../Contact.html'));
})

router.get('/gallery', (req,res)=>{
    res.sendFile(path.join(__dirname, '../Gallery.html'));
})

router.get('/menu', (req,res)=>{
    res.sendFile(path.join(__dirname, '../menu.html'));
})


module.exports= router;