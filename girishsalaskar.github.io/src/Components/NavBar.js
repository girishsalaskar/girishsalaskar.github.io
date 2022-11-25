import React, { Component } from "react";
import profilePic from '../img/profile-pic-m.jpg'

class NavBar extends Component {
  state = {}
  render() {
    const date = new Date();
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profilePic} alt="" />
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
            </li>
            <li className="nav-item">
              <span className="nav-link">&copy; { date.getFullYear() }. All rights reserved</span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;