import React, { Component } from "react";
import { Link } from "react-router-dom";
import profilePic from '../img/profile-pic-m.jpg'

class NavBar extends Component {
  state = {}
  render() {
    const date = new Date();
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <Link className="navbar-brand js-scroll-trigger" to="/">
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profilePic} alt="" />
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className="nav-link js-scroll-trigger">Experience</Link>
            </li>
            <li className="nav-item">
              <Link to="/education" className="nav-link js-scroll-trigger">Education</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/certificates" className="nav-link js-scroll-trigger">Certificates</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/skills" className="nav-link js-scroll-trigger">Skills</Link>
            </li>
            <li className="nav-item">
              <span className="nav-link" style={{ fontSize: "15px", color: "rgba(255,255,255,.95)" }} >&copy; {date.getFullYear()}. All rights reserved</span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;