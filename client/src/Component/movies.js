
import Header from '../Component/header'
import UserLogin from '../Component/userlogin'
import { useLocation } from 'react-router-dom';
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Session from '../session/session';
import { useState, useEffect } from 'react'
import Axios from 'axios';
import Rating from './Rating'
Axios.defaults.withCredentials = true;

function Form() {
  var session = sessionStorage.getItem("key");
  if (session=='null') {
    return (
      <>
        <h5>Please Login to Submit Your Review</h5>
        <Link to="/Login">   <button class="mybtn3">Login</button></Link>
        <span class="text-center"> or</span>
        <Link to="/Signup">   <button class="mybtn3">Signup</button></Link>
        <Outlet />
      </>
    )
  } else {
    return (
      <>
        <Rating />
      </>
    )
  }
}
//get rating details 


//movies
export default function Movies() {
  const [data, setData] = useState([]);
  const location = useLocation();
  Session.setmid(location.state.id);
  var x=0,count=0;
  const getData = () => {
    fetch('http://localhost:3001/Myrating'
        , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            setData(myJson)
        });
}
useEffect(() => {
    getData()
}, [])

{data.map((item2) => {if(location.state.id==item2.movie_id){x= x+item2.rating;count++;}} )}
  return (
    <>
      <Header />
      <div class="main-content">
        
          <div class="page">
          <div class="container">
            <div class="breadcrumbs">
              <a >Home</a>
              <a >Movies</a>
              <span>{location.state.name} </span>
            </div>
            <div class="content">
              <div class="row">
                <div class="col-md-6">
                  <figure class="movie-poster"><img class="imgsize"src={location.state.url} alt="#" /></figure>
                </div>
                <div class="col-md-6">
                  <h2 class="movie-title">{location.state.name}</h2>
                  <div class="movie-summary">


                  </div>
                  <ul class="movie-meta">
                    <li><strong>Rating: {x/count} out of 10 </strong>

                   
                    </li>
                    <li><strong>Release:</strong> {location.state.year}</li>
                    <li><strong>Langauge:</strong> {location.state.language}</li>
                    <li><strong>Category:</strong> {location.state.genre}</li>
                  </ul>

                  <ul class="starring">
                
                    <h3>Give a Review</h3>

                    <Form />
                    
                  </ul>
                </div>

              </div>
              <div class="row">  
               { data.map((item) => 
                
              <div class="col-lg-3">
                     <div class="card ">
                            <h6>{item.user_id}</h6>    
                            <h6>{item.rating}</h6>
                            <h6>{item.value}</h6>               
                    </div>
              </div>
)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )

}