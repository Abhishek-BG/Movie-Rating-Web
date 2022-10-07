import Header from './header'
import './mystyle.css'
import { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import Session from '../session/session';

Axios.defaults.withCredentials = true;

export default function Userlogin() {
  const nav = useNavigate();


  const [email, setrole] = useState("");
  const [password, setpassword] = useState("");
  const [status, setstatus] = useState("");


  const login = () => {

    if (email != "" && password != "") {
      Axios.post("http://localhost:3001/userlogin", {
        email: email,
        password: password,
      }).then((response) => {
        if (response.data.message === "success") {
          sessionStorage.setItem("key", email);
          if(response.data.role == 0)
          {
            Session.setrole(0);
            nav("/");
          }
          else if(response.data.role == 1)
          {
            Session.setrole(1);
            nav("/Admindash");
          }
          else{
            Session.setrole(2);
            nav("/");
          }
        }
        else {
          setstatus("Wrong Email or Password");

        }
      });
    }
    else {
      setstatus("Please enter all the feilds");
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
                <h1 class="text-centre">Login</h1>

                <div class="contact-form text-center">
                  <input type="email"
                    class="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setrole(e.target.value)}
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
        </div>
      </div>
    </>
  )
}
