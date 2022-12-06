import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline list-icons">
            <li className="list-inline-item" title="HTML and HTML5">
              <i className="devicons devicons-html5"></i>
            </li>
            {/* <li className="list-inline-item">
              <i className="devicons devicons-css3"></i>
            </li> */}
            <li className="list-inline-item" title="Javascript">
              <i className="devicons devicons-javascript"></i>
            </li>
            <li className="list-inline-item" title="jQuery">
              <i className="devicons devicons-jquery"></i>
            </li>
            <li className="list-inline-item" title="React JS">
              <i className="devicons devicons-react"></i>
            </li>
            <li className="list-inline-item" title="PHP">
              <i className="devicons devicons-php"></i>
            </li>
            {/* <li className="list-inline-item" title="Bootstrap">
              <i className="devicons devicons-bootstrap"></i>
            </li> */}
            <li className="list-inline-item" title="MySQL">
              <i className="devicons devicons-mysql"></i>
            </li>
            <li className="list-inline-item" title="PostgreSQL">
              <i className="devicons devicons-postgresql"></i>
            </li>
            <li className="list-inline-item" title="Node JS">
              <i className="devicons devicons-nodejs"></i>
            </li>
            <li className="list-inline-item" title="Linux">
              <i className="devicons devicons-linux"></i>
            </li>
            {/* <li className="list-inline-item">
              <i className="devicons devicons-npm"></i>
            </li> */}
          </ul>

          {/* <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum</li>
          </ul> */}
        </div>
      </section>
    );
  }
}

export default Skills;