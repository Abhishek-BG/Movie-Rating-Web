
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const Axios = require("axios")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "movie_app",

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
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

function message(props) {
    console.log(props);
}


app.get('/login', (req, res) => {
    res.send('This has CORS enabled ')
})
app.get('/movie', (req, res) => {
    res.send('This has CORS enabled ')
})

//admin login
app.post('/login', (req, res) => {
    const username = req.body.email;
    const password = req.body.password;
    db.execute(
        "SELECT * FROM admin WHERE email = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            if (result.length > 0) {
    
                res.send({ message: "success" });
            }
            if (result.length <= 0) {
                res.send({ message: "error" })
            }

        }

    );
});
//register

app.post('/signup', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    db.query("SELECT * FROM users Where email = ?", 
    [email],
    (err, results, fields) => {
        if(results.length > 0)
        {   console.log(err);
            res.send({ message:"User Exists"})
        }else{
            db.execute(
        
                "INSERT INTO users (name,email,password) values(?,?,?) ",
                [name,email,password],
                (err, result)=> {
                  // console.log(result);
                    if (err) {
                      console.log(err);
                    }
                    else{
                            res.send({message: "success"});
                    }
                    }
                
            );
        }
      });
    
   });

//user Login
app.post('/userlogin', (req, res) => {
    const username = req.body.email;
    const password = req.body.password;
    db.execute(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            if (result.length > 0) {
                if(result[0].role==0)
                {
                    res.send({ message: "success",role:0 });
                }
                else if(result[0].role==1){
                    res.send({ message: "success",role:1 });
                }
                else if(result[0].role==2){
                    res.send({ message: "success",role:2 });
                }
               
            }
            if (result.length <= 0) {
                res.send({ message: "error" })
            }

        }

    );
});
//movie

app.post('/movie', (req, res) => {
    const moviename  = req.body.title;
    const year = req.body.year;
    const language = req.body.language;
    const genre = req.body.genre;
    const rating =0;
    const url = req.body.url;
    db.execute(
        "INSERT INTO movie (name,year,genre,language,rating,url) values(?,?,?,?,?,?) ",
        [moviename,year,genre,language,rating,url],
        (err, result)=> {
          // console.log(result);
            if (err) {
               console.log(err); 
            }
            if (result.length > 0) {
                res.send({message: "success"});
                }
           if(result.length <= 0)
           {
            res.send({ message: "error" })
           }
          
            }
        
    );
   });
//submit rating 
//

app.post('/rating', (req, res) => {

    const movieid  = req.body.movie_id;
    const rating =req.body.rating;
    const userid = req.body.user_id;
    const userrole = req.body.user_role;
    const value = req.body.value;

    db.query("SELECT * FROM review WHERE user_id = ? AND movie_id =?",[userid,movieid], (err, results, fields) => {
        if(err) throw err;
        if(results.length > 0)
        { 
            res.send({ message:"Review Exists"})
        }
        else{
            db.execute(
                "INSERT INTO review (movie_id,user_id,user_role,rating,value) values(?,?,?,?,?) ",
                [movieid,userid,userrole,rating,value],
                (err, result)=> {
                    if (result.length > 0) {
                        res.send({message: "success"});
                        }
                   if(result.length <= 0)
                   {
                    res.send({ message: "error" })
                   }
                  
                    }
                
            );
        }
      });
   
   });
//movie details 
app.get('/mymovies', (req, res) => {
    db.query("SELECT * FROM movie", (err, results, fields) => {
      if(err) throw err;
         res.send(results);
    });
});
//rating details 
app.get('/Myrating', (req, res) => {
    
    db.query("SELECT * FROM review", (err, results, fields) => {
      if(err) throw err;
         res.send(results);
    });
});
app.listen(3001, () => {
    console.log("running server");
});


