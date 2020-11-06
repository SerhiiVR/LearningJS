"use strict";
const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get("/", function (req, res) {

   let a = document.getElementsByName('data');
   console.log(a.length + "f");
    res.sendFile(__dirname+'/index.html');


    setTimeout(() => {
       // res.send("hi");
    }, 400);

}
);

app.listen(3000);

