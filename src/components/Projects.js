import React from "react";
import {Link} from "react-router-dom";

function Projects() {
  return (
    <div className="container">
      <div className="row text-center m-4">
        <div className="col">
          <h1 className="h1">projects</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <nav className="navbar">
            <div className="container-fluid">
              <Link to="/">home</Link>
              <Link to="/about">about</Link>
              <Link className="current-link p-2" to="/projects">projects</Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Projects;
