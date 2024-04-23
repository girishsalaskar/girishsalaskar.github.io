import React, { Component } from 'react';
//import logo from './logo.svg';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/devicons/css/devicons.min.css';
import './vendor/simple-line-icons/css/simple-line-icons.css';
import './css/resume.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Blog from './Components/blogging/Blog';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="container-fluid p-0">
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/experience' element={ <Experience /> } />
            <Route path='/education' element={ <Education /> } />
            <Route path='/skills' element={ <Skills /> } />
            <Route path='/contact-me' element={ <Contact /> } />
            <Route path='/blogs' element={ <Blog /> } />
            <Route path='/*' element={
              (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div className="my-auto">
                  <h2 className="mb-5" style={{color: '#BD5D38'}}>404 - Page not found!</h2>
                </div>
              </section>)
            } />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
