
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

//movie details 
app.get('/mymovies', (req, res) => {
    db.query("SELECT * FROM movie", (err, results, fields) => {
      if(err) throw err;
         res.send(results);
    });
});
app.listen(3001, () => {
    console.log("running server");
});