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
          <h2 className="mb-5">Skills & Technologies</h2>

          <ul className="list-inline list-icons">
            <li className="list-inline-item" title="HTML and HTML5">
              <i className="devicons devicons-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-css3"></i>
            </li>
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
            <li className="list-inline-item" title="Java">
              <i className="devicons devicons-java"></i>
            </li>
            <li className="list-inline-item" title="MySQL">
              <i className="devicons devicons-mysql"></i>
            </li>
            <li className="list-inline-item" title="PostgreSQL">
              <i className="devicons devicons-postgresql"></i>
            </li>
            <li className="list-inline-item" title="Mongo DB">
              <i className="devicons devicons-mongodb"></i>
            </li>
            <li className="list-inline-item" title="Node JS">
              <i className="devicons devicons-nodejs"></i>
            </li>
            <li className="list-inline-item" title="Linux">
              <i className="devicons devicons-linux"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-npm"></i>
            </li>
            <li className="list-inline-item" title="Git">
              <i className="devicons devicons-git"></i>
            </li>
            <li className="list-inline-item" title="GitHub">
              <i className="devicons devicons-github"></i>
            </li>
            <li className="list-inline-item" title="Bitbucket">
              <i className="devicons devicons-bitbucket"></i>
            </li>
            <li className="list-inline-item" title="Jira">
              <i className="devicons devicons-jira"></i>
            </li>
          </ul>

          <table className="table table-bordered table-stripped">
            <tbody>
              <tr>
                <td>Primary Programming Skills</td>
                <td>PHP, JavaScript, HTML5, CSS3, Java, TypeScript</td>
              </tr>
              <tr>
                <td>Frameworks and Libraries</td>
                <td>ZF1, CodeIgniter, React, Angular, Core MVC, jQuery</td>
              </tr>
              <tr>
                <td>Database Skills</td>
                <td>MySQL/MariaDB, PostgreSQL, Oracle, SQLite</td>
              </tr>
              <tr>
                <td>NoSQL</td>
                <td>MongoDB</td>
              </tr>
              <tr>
                <td>Architectural Skills</td>
                <td>Design Patterns and Micro Services</td>
              </tr>
              <tr>
                <td>Version Controlling</td>
                <td>GitHub, Git, SVN, BitBucket</td>
              </tr>
              <tr>
                <td>Operating Systems</td>
                <td>CentOS 7, Fedora 24+, Ubuntu 16+, Windows-X</td>
              </tr>
              <tr>
                <td>Testing</td>
                <td>PHPUnit</td>
              </tr>
              <tr>
                <td>Data Mapping Tools</td>
                <td>JSON, XML</td>
              </tr>
              <tr>
                <td>IDE and other Development Tools</td>
                <td>VS Code, Netbeans, Eclipse, PHPStorm, Github Desktop, Sourcetree</td>
              </tr>
            </tbody>
          </table>

          <h2 className="mb-5">Stats</h2>
          <table className="table table-bordered table-stripped">
            <thead className="thead-light">
              <tr>
                <td>Github's Stats</td>
                <td>Most used Languages</td>
                <td>Streak</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="https://github-readme-stats.vercel.app/api?username=girishsalaskar&show_icons=true&theme=material-palenight" alt="Github Stats" />
                </td>
                <td>
                  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=girishsalaskar&layout=compact&theme=material-palenight" alt="Top Languages" />
                </td>
                <td>
                  <img src="https://github-readme-streak-stats.herokuapp.com/?user=girishsalaskar&theme=material-palenight" alt="Github Streak" />
                </td>
              </tr>
              {/* <tr>
                <td>Github summary</td>
                <td colSpan={2}><img src="https://github-profile-trophy.vercel.app/?username=girishsalaskar" alt="girishsalaskar" /></td>
              </tr> */}
            </tbody>
          </table>
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