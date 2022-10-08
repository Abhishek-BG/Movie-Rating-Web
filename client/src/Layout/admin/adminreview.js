
import Header from '../../Component/header'
import { useLocation } from 'react-router-dom';
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Session from '../../session/session';
import { useState, useEffect } from 'react'
import Axios from 'axios';
import Rating from '../../Component/Rating'
import '../../Component/mystyle.css'

//movies
export default function AdminReview() {
    const [data, setData] = useState([]);
    const location = useLocation();
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

//code to get the review details 
  return (
    <>
      <Header />

      <div class="main-content">
      <div class="page">
          <div class="container">
           
            <div class="content">
            <div class="row">  
              <h2>User Reviews</h2>
              <hr></hr>
               { data.map((item) => 
                
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
              </div>
            </div>
          </div>
        </div>
        </div>
    
    </>

  )

}