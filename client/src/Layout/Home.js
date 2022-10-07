
import React, { useState, useEffect } from 'react';
import Header from '../Component/header'
import Carousel from 'react-bootstrap/Carousel'


import { useNavigate } from "react-router-dom";
export default function Home() {
    const nav = useNavigate();
    const [data, setData] = useState([]);
    const review = (id, name, url, rating, year, language, genre) => {
        nav('/Movies', {
            state: {
                id: id, name: name,
                url: url,
                rating: rating,
                year: year,
                language: language,
                genre: genre
            }
        })
    }
    const getData = () => {
        fetch('http://localhost:3001/mymovies'
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
//
 function sum(pass){
    pass= pass+pass;
        return pass;
    }
   
   
    return (
        <>

            <Header />
            <div class="main-content ">
                <div class="page">
                    <div class="container">
                        <div class="row card-ti  tl">
                            {data && data.length > 0 && data.map((item) =>
                                <div className="col-lg-3">
                                    <div class="card mymovie-box ">
                                        <p class="notification">
                                            <img src={item.url} class="card-img-top img-height " alt="..." />
                                            <span class="badge">{item.genre}
                                            </span>
                                        </p>
                                        <div class="rating">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span></span>
                                        </div>
                                        <div class="card-body card-wi">
                                            <h5 class="left">
                                                <button href="#" id="myBtn-" class="mybtn1"
                                                    onClick={() => review(item.sl,
                                                        item.name,
                                                        item.url,
                                                        item.rating,
                                                        item.year,
                                                        item.language,
                                                        item.genre)}>Give a Review</button></h5>
                                            <h5 class="card-title">Movie Name :{item.name}
                                            </h5>
                                            <h5 class="card-text">Release Year: {item.year}</h5>
                                            <h5 class="card-text">Language: {item.language}</h5>

                                        </div>
                                    </div>
                                </div>
                            )}
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

            </div>
        </>

    )

}