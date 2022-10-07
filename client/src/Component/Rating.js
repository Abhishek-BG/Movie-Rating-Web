import Header from '../Component/header'
import UserLogin from '../Component/userlogin'
import { useLocation } from 'react-router-dom';
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Session from '../session/session';
import { useState, useEffect } from 'react'
import Axios from 'axios';
import Movies from './movies'
Axios.defaults.withCredentials = true;

class Rating extends React.Component {
 
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      stars: [],
      rating: 0,
      value: '',
      hovered: 0,
      message:'',
      selectedIcon: "★",
      deselectedIcon: "☆"
    };
   // var movie = Movies.location.state.sl;
    let outOf = props.outOf ? props.outOf : 10;

    for (var i = 0; i < outOf; i++) {
      this.state.stars.push(i + 1);
    }
    //return this.state.rating;
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });

    if (this.props.onChange)
      this.props.onChange(newRating);
  }

  hoverRating(rating) {
    this.setState({
      hovered: rating
    });
  }
  setstatus(message) {
    this.setState({message: message});
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  
  submit() {
     
    const role = Session.getrole();
    const mid = Session.getmid();
    const session = sessionStorage.getItem("key");
    //form submit
    //alert(this.state.rating+" "+this.state.value+" "+mid+" "+role+" "+session)
    if(this.state.value != "" && this.state.rating > 0)
    {
      Axios.post("http://localhost:3001/rating", {
        rating: this.state.rating,
        value: this.state.value,
        movie_id:mid,
        user_role:role,
        user_id:session,
    }).then((response) => {
        if (response.data.message == "success") {
         this.setstatus("Review Submited");
        }
        else {
            this.setstatus("You Cannot post more than one Review on a Movie");

        }
    });
    }
    else{
     this.setstatus("Please Give a Valid rating");
    }
  }
  
  render() {

    const { stars, rating, hovered, deselectedIcon, selectedIcon } = this.state;

    //   <h5>{this.state.stars.length}</h5>
    return (
      <div class="contact-form text-center">
        <div className="rating2">
          <hr />


          {//stars hooks
          }
          {stars.map(star => {
            return (
              <>
                <span

                  style={{ cursor: 'pointer' }}
                  onClick={() => { this.changeRating(star); }}
                  onMouseEnter={() => { this.hoverRating(star); }}
                  onMouseLeave={() => { this.hoverRating(0); }}
                >
                  {rating < star ?
                    hovered < star ? deselectedIcon : selectedIcon
                    :
                    selectedIcon
                  }

                </span>

              </>


            );
          })}
          <h6 >{rating}/10</h6>
        </div>
        <textarea class=""
          name="text"
          alue={this.state.value}
          onChange={this.handleChange} ></textarea>
        <div class="alert-danger" >
        </div>
        <h4>{this.state.message}</h4>
        <input type="button" class="text-centre"
          name="submit" value="Submit"
          onClick={() => this.submit()} />

      </div>
    );
  }

}
export default Rating;