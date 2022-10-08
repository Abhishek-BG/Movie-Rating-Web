import React from 'react';
import ReactDOM from 'react-dom/client';
import Movies from './Component/movies'
import Home from './Layout/Home'
import { BrowserRouter, Redirect, Routes, Route } from "react-router-dom";
import Admindash from './Layout/admindash'
import AddMovie from './Layout/admin/addmovie'
import AdminReview from './Layout/admin/adminreview'
import Signup from './Component/signup'
import UserLogin from './Component/userlogin'
import { combineReducers } from 'redux';
import { sessionReducer } from 'react-session';
import Footer from './Component/footer'
const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route>
         <Route index element={<Home />} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/AddMovie" element={<AddMovie/>} />
          <Route path="/AdminDash" element={<Admindash/>} />
          <Route path="/SignUp" element={<Signup/>} />
          <Route path="/AdminReview" element={<AdminReview/>}/>
          <Route path="/Login" element={<UserLogin/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
   </>
  );
}





root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
