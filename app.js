const express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

const dbURI = 'mongodb+srv://thushara:e16388com@cluster0.whce1.mongodb.net/project?retryWrites=true&w=majority';
var PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology:true,useCreateIndex:true})
    .then((result)=>{app.listen(PORT)
        console.log("db connected")
        console.log("Listening on port "+PORT)
    })
    .catch((err)=>console.log("error "+err));



app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());



app.get('/',(req,res)=>{res.send("Hello F")
    console.log("accessed '/' ")
});


// app.listen(PORT,function(){
//     console.log("Listening to port:"+PORT);
// })

let apiRoutes = require('./routes/api-routes')

app.use('/api',apiRoutes)
