import {Link} from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="row text-center m-4">
        <div className="col">
          <h1 className="h1">Victor Wei</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <nav className="navbar">
            <div className="container-fluid">
              <Link className="current-link" to="/">home</Link>
              <Link to="about">about</Link>
              <Link to="projects">projects</Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8 m-3">
          <BlogCard title="hi" date="12/5/21" />
          <BlogCard title="hi" date="12/5/21" />
          <BlogCard title="hi" date="12/5/21" />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

// const BlogList = (props) => {
//   return (
//     <div className="container">
//
//     </div>
//   )
// }

const BlogCard = (props) => {
  return (
    <div class="card m-4">
      <div class="card-body">
        <h3 class="card-title">Card title</h3>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text text-muted">January 29 . 6 min</p>
      </div>
    </div>
  )
}

export default App;
