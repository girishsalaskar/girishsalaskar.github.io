import React from "react";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0">Girish
          <span className="text-primary">Salaskar</span>
        </h1>
        {/* <div className="subheading mb-5">A/p Khardi, Tal. Pandharpur, Dist. Solapur · +91-9665-703062 ·
          <a href="mailto:girishsalaskar812@gmail.com">girishsalaskar812@gmail.com</a>
        </div> */}
        <p style={{color:'rgba(0,0,0,0.3)'}}>
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
        <p className="mb-5">Hi, I'm a software development engineer, worked in IT corporate. I like to solve logical problems in programming and developing bug free softwares and websites. Currently learning the front-end (react and angular) development technologies. I've worked on PHP, MySQL, PostgreSQL, JavaScript, Java, HTML. I love to work on linux OS (like Ubuntu, Zorin OS, Fedora, CentOS) and I'm open source enthusiast.</p>
      </div>
    </section>
  );
}

export default Home;