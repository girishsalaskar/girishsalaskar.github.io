import React, { Component } from 'react';
//import logo from './logo.svg';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/devicons/css/devicons.min.css';
import './vendor/simple-line-icons/css/simple-line-icons.css';
import './css/resume.css';
import NavBar from './NavBar';
import Home from './Home';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div className="container-fluid p-0">
          <Home></Home>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
