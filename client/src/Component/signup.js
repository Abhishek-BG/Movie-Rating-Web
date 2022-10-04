import Header from './header'
import './mystyle.css'
import { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import Session from '../session/session';
Axios.defaults.withCredentials = true;

export default function Signup() {
    const nav = useNavigate();


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const [password2, setpassword2] = useState("");
    const [status, setstatus] = useState("");
    const sign = () => {

        if (email != "" && password != "" && password2 != "" && name != "") {
            if (password == password2) {
                Axios.post("http://localhost:3001/signup", {
                    email: email,
                    password: password,
                    name: name,

                }).then((response) => {
                    if (response.data.message == "success") {
                        nav("/login");
                    }
                    else {
                        setstatus("User Exits, Please Use a different mail id ");

                    }
                });
            } else {
                setstatus("Passwords dont match ");
            }
        }

    };
    return (

        <>
            <Header />
            <div class="main-content">
                <div class="container">
                    <div class="page">
                        <div class="row justify-content-lg-center">

                            <div class="col-lg-auto myloginbox">
                                <h1 class="text-centre">Sign Up</h1>

                                <div class="contact-form text-center">
                                    <input type="text"
                                        class="name"
                                        name="name"
                                        placeholder="Your Name"
                                        onChange={(e) => setname(e.target.value)}
                                        required />
                                    <input type="email"
                                        class="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={(e) => setemail(e.target.value)}
                                        required />
                                    <input type="password"
                                        class="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={(e) => setpassword2(e.target.value)}
                                        required />
                                    <input type="password"
                                        class="password"
                                        name="password"
                                        placeholder="Confirm Password"
                                        onChange={(e) => setpassword(e.target.value)}
                                        required />
                                    <div class="alert-danger" >  {status} </div>
                                    <input type="button" class="text-centre" name="submit" value="Sign Up " onClick={() => sign()} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
