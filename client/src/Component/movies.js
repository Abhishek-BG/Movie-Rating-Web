
import Header from '../Component/header'
import UserLogin from '../Component/userlogin'
import { useLocation } from 'react-router-dom';
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Session from '../session/session';
import { useState, useEffect } from 'react'
import Axios from 'axios';
import Rating from './Rating'
import './mystyle.css'
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
  const [rate,setRate] = useState([]);
  //critic review count
  var critic =0,strMessage="";
  //session
  var session = sessionStorage.getItem("key");
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

// criric rating 

{data.map((item) => {if(item.user_id==session){critic++}} )}
if(critic >=3){
  strMessage="Critic Review"}
  else{
    strMessage="Give a Review"
  }
//calculate rating
{data.map((item2) => {if(location.state.id==item2.movie_id){
  if(item2.user_role==2){
    
    x=x+(item2.rating*2)//2x
    count+=2;
  }else{
    x= x+item2.rating;
    count++;
  }
}} )}

//code to get the review details 
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
                    <li><strMessageong>Rating: {x/count} out of 10 </strMessageong>

                   
                    </li>
                    <li><strMessageong>Release:</strMessageong> {location.state.year}</li>
                    <li><strMessageong>Langauge:</strMessageong> {location.state.language}</li>
                    <li><strMessageong>Category:</strMessageong> {location.state.genre}</li>
                  </ul>

                  <ul class="starring">
                
                    <h3>{strMessage}</h3>

                    <Form />
                    
                  </ul>
                </div>

              </div>
              <div class="row">  
              <h2>User Reviews</h2>
              <hr></hr>
              {//review by user for movie
              }
               { data.map((item) => {if(item.movie_id==location.state.id){return(
              <div class="col-lg-3">
                <div class="row">
                     <div class=" review-box ">
                             <h4>{item.user_id} Says</h4>
                        <div class="col-lg-3">
                            <img class="test-img"src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" />
                        </div>
                        <div class="col-lg-9">
                            <span>{item.rating}/10</ span> 
                            <p>{item.value}</p>
                       </div>
                      </div>  
                    </div>           
                    
              </div> 
               )}
               }
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )

}