import {Link} from "react-router-dom";
import React from "react";

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
              <Link className="current-link p-2" to="/">home</Link>
              <Link to="about">about</Link>
              <Link to="projects">projects</Link>
            </div>
          </nav>
        </div>
      </div>
      {/*<div className="row justify-content-center">*/}
      {/*  <div className="col-2 m-2 text-center">*/}
      {/*    <h4>Categories</h4>*/}
      {/*    <ul className="list-group">*/}
      {/*      <Link to="/musings/technology">technology</Link>*/}
      {/*      <Link to="/musings/personal">personal</Link>*/}
      {/*      <Link to="/musings/music">music</Link>*/}
      {/*      <Link to="/musings/thoughts">fleeting thoughts</Link>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="row justify-content-center">
        <div className="col-8 m-3">
          <BlogLink title="hi" date="12/5/21" />
          <BlogLink title="hi" date="12/5/21" />
          <BlogLink title="hi" date="12/5/21" />
        </div>
      </div>
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

const BlogLink = (props) => {
  return (
    <div className="container m-3 border-top border-bottom">
      <div className="row d-flex justify-content-between">
        <div className="col-8">
          <Link className="h3" to="/blog1">{props.title}</Link>
        </div>
        <div className="col-2">
          <h4>{props.date}</h4>
        </div>
      </div>
    </div>
  )
}

export default App;
