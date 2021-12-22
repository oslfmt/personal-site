import React from 'react';
import {Link} from "react-router-dom";
import pic from '../images/mcdonalds.jpeg'

function About() {
  return (
    <div className="container">
      <div className="row text-center m-4">
        <div className="col">
          <h1 className="h1">about</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <nav className="navbar">
            <div className="container-fluid">
              <Link to="/">home</Link>
              <Link className="current-link p-2" to="/about">about</Link>
              <Link to="/projects">projects</Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="row mt-4 mb-5">
        <div className="col-4 border">
          <h2 className="m-2 pt-2 h2">victor wei</h2>
          <img className="m-2" src={pic} alt="me" />
          <p>AGE: 20 YRS</p>
          <p>FROM: THE INNER ASTEROID BELT</p>
          <p>CONTACT: VW1262@GMAIL.COM</p>
          <a href="https://github.com/victor-wei126">Github</a>
          <br></br>
          <a href="https://www.linkedin.com/in/victor-wei-2bba17182/">Linkedin</a>
        </div>
        <div className="col-8 border p-3">
          <p>I've always had a weird obsession with names. I'm not sure why, but I always find myself searching up "____ name meaning" or "____ name origin". It's a weird, pathetic pasttime. I've searched up the meaning and origin of a lot of friends names, celebrities, or just random acquantainces in my life. Once I find my answer, I usually say something along the lines of "ah, yes, very true". As for myself, my name means:
            <br></br>
            <br></br>
            Victor - conquerer
            <br></br>
            Wei - power
            <br></br>
            <br></br>
            Put together, that means something like "powerful conquerer", which is unfortunate, cause I don't think you can get anymore dictatorial than that.
            <br></br>
            <br></br>
            Besides people, I like to figure out the backstory behind the name of things. Bands and companies fascinate me the most. Whenever I see their names I think, damn, that's clean, how'd they come up with that? Because when I come up with my own names they always deserve to be burned. I started off by usually combining two nouns that had some basic relation to what I was working on, and combining those. After that disgusting experiment, I started trying to imitate big, popular names. I noticed that a lot were clean and simple, something that rolled off the tongue easy, like A P PLE or NIR V A NA. So how about something like O RANGE, or M O K SHA. Not so cool now, is it?
            <br></br>
            <br></br>
            Is there a deeper meaning to all this? Perhaps. But honestly I just think names are cool. I don't think there's any other construct that can pack so much history and meaning in a word or two. Below are some of my favorite "hidden" names. Go ahead, try and decrypt them, or maybe discover and translate some names of your own.
            <br></br>
            <br></br>
            Rustling grace by god
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
