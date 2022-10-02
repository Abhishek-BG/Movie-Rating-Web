
import Header from '../../Component/header'
import {useState} from 'react'
import Axios from 'axios';
import React from 'react'

import { BrowserRouter, Routes, Redirect, router } from "react-router-dom";

import { useNavigate } from "react-router-dom";
function AddMovie(){
    
Axios.defaults.withCredentials = true;
    const [year,setyear] = useState("");
    const[language,setlanguage] = useState("");
    const [title,settitle] = useState("");
    const [genre,setgenre] = useState("");
    const [url,seturl] = useState("");
    const [status,setstatus] = useState("Add Movie");
    const nav = useNavigate();
    //method

    const addmovie= () => {

        if(year=="" || language=="" || title=="" || url=="" || genre==""){
            setstatus("Please fill all the feilds");
        }else{
            Axios.post("http://localhost:3001/movie",{
                title: title,
                genre: genre,
                language: language,
                year:year,
                url:url,
                 }).then((response)=>
                 {
                     if (response.data.message === "success") {
                         setstatus("Added Movie");
                     }
                     else {
                         setstatus("Something Went Wrong");
         
                     }
                 }).catch((error)=>{console.log(error);})
         
                 setstatus("Added Movie");
        }

    }
    return (
        
       <>
        <Header/>
            <div class="container">
                <div class="row justify-content-lg-center">
                    <div class="col-lg-auto ">
                        <h1 class="text-centre cl-pm">{status}</h1>
                        <div class="contact-form text-center">
                            <input type="text"
                                name="title"
                                placeholder="Movie Name"
                                onChange={(e) => settitle(e.target.value)}
                                required />
                            <input type="date"
                                name="year"
                                placeholder="Year of Release"
                                onChange={(e) => setyear(e.target.value)}
                                required />
                              <input type="text"
                                name="language"
                                placeholder="Language"
                                onChange={(e) => setlanguage(e.target.value)}
                                required />
                                <input type="text"
                                name="genre"
                                placeholder="genre"
                                onChange={(e) => setgenre(e.target.value)}
                                required />
                                 <input type="text"
                                name="url"
                                placeholder="Banner Image Url"
                                onChange={(e) => seturl(e.target.value)}
                                required />
                          
                            <br></br>
                            
                            <button type="button" class="mybtn2" name="submit"  onClick={() => addmovie()}>Submit</button>
                            <br>
                            </br>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
      

}
export default AddMovie;