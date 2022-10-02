
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const Axios = require("axios")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"movie_app",

});

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
        
    })
);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin' ,'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

function message(props){
  console.log(props);      
}


app.get('/login', (req, res) => {
    res.send('This has CORS enabled ')
})


app.post('/login', (req, res) => {
 const username = req.body.email;
 const password = req.body.password;
 db.execute(
     "SELECT * FROM admin WHERE email = ? AND password = ?",
     [username, password],
     (err, result)=> {
       // console.log(result);
         if (err) {
            console.log(err);
         }
         if (result.length > 0) {
           // message("success")
          // console.log(result)
           res.send({message:"success"});
             }
        if(result.length <= 0)
        {
          //  console.log("Wrong input");
            res.send({message:"error"})
        }
       
         }
     
 );
});

//movie

 
app.listen(3001, () => {
    console.log("running server");
});