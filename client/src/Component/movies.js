
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
  if (Session.getemail() == false || session == false || session == null) {
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

//movies
export default function Movies() {

  const location = useLocation();
  return (
    <>
      <Header />
      <div class="main-content">
        
          <div class="page">
          <div class="container">
            <div class="breadcrumbs">
              <a >Home</a>
              <a >Movies</a>
              <span>{location.state.name}</span>
            </div>

            <div class="content">
              <div class="row">
                <div class="col-md-6">
                  <figure class="movie-poster"><img src={location.state.url} alt="#" /></figure>
                </div>
                <div class="col-md-6">
                  <h2 class="movie-title">{location.state.name}</h2>
                  <div class="movie-summary">


                  </div>
                  <ul class="movie-meta">
                    <li><strong>Rating: {location.state.rating} out of 5 </strong>

                      <br></br>
                      <h4>
                        <div class="star-rating" title="Rated 4.00 out of 5" ><span >
                          <strong class="rating">4.00</strong> out of 5</span></div></h4>
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
            </div>
          </div>
        </div>
      </div>
    </>

  )

}