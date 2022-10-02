
import React, { useState, useEffect } from 'react';
import Header from '../Component/header'
import Carousel from 'react-bootstrap/Carousel'
export default function Home() {

    const [data, setData] = useState([]);

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
    return (
        <>

            <Header />
            <div class="main-content">
                <div class="container">
                    <div class="page">
                        <div class="row card-ti">
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
                                        </div>
                                        <div class="card-body card-wi">
                                            
                                            <h5 class="card-title">Movie Name :{item.name}
                                            </h5>
                                            <h5 class="card-text">Release Year: {item.year}</h5>
                                            <h5 class="card-text">Language: {item.language}</h5>
                                            
                                            <a href="#" id="myBtn-" class="btn btn-primary">Give a Review -></a>
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