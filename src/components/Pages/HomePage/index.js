import React from "react";
import { Link } from "react-router-dom";
import StackIcon from "tech-stack-icons";

function Home() {
  return (
    <main>
      <h1 className="display-2 fw-semibold ms-5 mt-5">Hi, my name is Fatma</h1>
      <p className="fs-3 my">I love creating wonderful user experiences.</p>
      <Link to="/contact">
        <button className="btn btn-primary get">Get in touch</button>
      </Link>

      <div className="container text-center mt-5 mb-5 border shadow">
        <div className="row">
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center">
              <StackIcon name="html5" className="icon" />
              <span className="skills">HTML5</span>
            </div>
          </div>
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center">
              <StackIcon name="css3" className="icon" />
              <span className="skills">CSS</span>
            </div>
          </div>
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center">
              <StackIcon name="js" className="icon" />
              <span className="skills">Javascript</span>
            </div>
          </div>
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center">
              <StackIcon name="reactjs" className="icon" />
              <span className="skills">React</span>
            </div>
          </div>
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center">
              <StackIcon name="git" className="icon" />
              <span className="skills">Git</span>
            </div>
          </div>
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center">
              <StackIcon name="figma" className="icon" />
              <span className="skills">Figma</span>
            </div>
          </div>
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center">
              <StackIcon name="wordpress" className="icon" />
              <span className="skills">Wordpress</span>
            </div>
          </div>
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center">
              <StackIcon name="vscode" className="icon" />
              <span className="skills">VsCode</span>
            </div>
          </div>
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center">
              <StackIcon name="bootstrap5" className="icon" />
              <span className="skills">Bootstrap</span>
            </div>
          </div>
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center">
              <StackIcon name="sass" className="icon" />
              <span className="skills">Sass</span>
            </div>
          </div>
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center">
              <StackIcon name="cypress" className="icon" />
              <span className="skills">Cypress</span>
            </div>
          </div>
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center">
              <StackIcon name="jest" className="icon" />
              <span className="skills">Jest</span>
            </div>
          </div>
          <div className="col-3 col-md-2 col-lg-1">
            <div className="d-flex flex-column align-items-center mb-3">
              <StackIcon name="postman" className="icon" />
              <span className="skills">Postman</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
