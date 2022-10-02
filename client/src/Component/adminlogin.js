import Header from './header'
import './mystyle.css'
import { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import Session from '../session/session';

Axios.defaults.withCredentials = true;

export default function Adminlogin() {
    const nav = useNavigate();


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [status, setstatus] = useState("");

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/login").then((response) => {
    //       if (response.data.session == 'success') {
    //         //alert("oj");
    //       }
    //     });
    //   }, []);

    //login event
    const login = () => {

        Axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.message === "success") {
                Session.setemail(true);
                sessionStorage.setItem("key", true);
                nav("/Admindash");
            }
            else {
                setstatus("Wrong Email or Password");

            }
        });
    };
    return (

        <>
            <Header />
            <div class="container">
                <div class="row justify-content-lg-center">

                    <div class="col-lg-auto myloginbox">
                        <h1 class="">Admin Login</h1>

                        <div class="contact-form text-center">
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
                                onChange={(e) => setpassword(e.target.value)}
                                required />
                            <div class="alert-danger" >  {status} </div>
                            <input type="button" class="text-centre" name="submit" value="Login " onClick={() => login()} />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
