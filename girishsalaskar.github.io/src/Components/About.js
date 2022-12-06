import React from "react";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0">Girish
          <span className="text-primary">Salaskar</span>
        </h1>
        <div className="subheading mb-5">A/p Khardi, Tal. Pandharpur, Dist. Solapur · +91-9665-703062 ·
          <a href="mailto:girishsalaskar812@gmail.com">girishsalaskar812@gmail.com</a>
        </div>
        <p style={{color:'rgba(0,0,0,0.7)'}}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('I am a Coder')
                .pauseFor(2500)
                .deleteChars(7)
                .typeString('an Investor')
                .pauseFor(2500)
                .deleteChars(11)
                .typeString('a Trader')
                .pauseFor(2500)
                .deleteChars(8)
                .typeString('Minimalist')
                .pauseFor(2500)
                .deleteChars(10)
                // .typeString('Spiritual')
                // .pauseFor(2500)
                // .deleteChars(9)
                .typeString('Music Lover')
                .pauseFor(2500)
                .deleteChars(11)
                .start();
            }}
            options={{loop:true}}
          />
        </p>
        <p className="mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        <ul className="list-inline list-social-icons mb-0">
          <li className="list-inline-item">
            <a href="https://facebook.com/girishsalaskar812">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://twitter.com/girishsalaskar">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/girish-salaskar/">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/girishsalaskar">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;