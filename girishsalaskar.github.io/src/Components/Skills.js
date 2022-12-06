import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  render() {
    return (
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item" title="HTML and HTML5">
              <i class="devicons devicons-html5"></i>
            </li>
            {/* <li class="list-inline-item">
              <i class="devicons devicons-css3"></i>
            </li> */}
            <li class="list-inline-item" title="Javascript">
              <i class="devicons devicons-javascript"></i>
            </li>
            <li class="list-inline-item" title="jQuery">
              <i class="devicons devicons-jquery"></i>
            </li>
            <li class="list-inline-item" title="React JS">
              <i class="devicons devicons-react"></i>
            </li>
            <li class="list-inline-item" title="PHP">
              <i class="devicons devicons-php"></i>
            </li>
            {/* <li class="list-inline-item" title="Bootstrap">
              <i class="devicons devicons-bootstrap"></i>
            </li> */}
            <li class="list-inline-item" title="MySQL">
              <i class="devicons devicons-mysql"></i>
            </li>
            <li class="list-inline-item" title="PostgreSQL">
              <i class="devicons devicons-postgresql"></i>
            </li>
            <li class="list-inline-item" title="Node JS">
              <i class="devicons devicons-nodejs"></i>
            </li>
            {/* <li class="list-inline-item">
              <i class="devicons devicons-npm"></i>
            </li> */}
          </ul>

          {/* <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design</li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging</li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Functional Teams</li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum</li>
          </ul> */}
        </div>
      </section>
    );
  }
}

export default Skills;