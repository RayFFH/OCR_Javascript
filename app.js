const express = require('express');
const app = express();
const fs = require("fs");
//const multer = require('multer');
const {TesseractWorker} = require('tesseract.js');
const worker = new TesseractWorker();

const storage = multer.diskStorage({
    destination: (req,res,cb) =>{
        cb(null, "./uploads")
    }
    filename: (req,res,cb)=>{
        cb(null, req.file);
    }

});

const upload = multer({storage: storage}).single('avatar');

