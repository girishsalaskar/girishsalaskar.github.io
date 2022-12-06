import React, { Component } from "react";

class Experience extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div class="my-auto">
                    <h2 class="mb-5">Experience</h2>

                    <div class="resume-item d-flex flex-column flex-md-row mb-5">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">BREAK</h3>
                            <div class="subheading mb-3"></div>
                            <p>For the purpose of health and well-being</p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">MAR 2022 - PRESENT</span>
                        </div>
                    </div>

                    <div class="resume-item d-flex flex-column flex-md-row mb-5">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">Senior Software Engineer</h3>
                            <div class="subheading mb-3">Xento Systems, Pune</div>
                            <p>Worked as a senior software engineer on multiple technologies and frameworks  like React, Core PHP, Javascript, PostgreSQL, MVC etc. Worked in agile methodology, detecting and resolving bugs. Became a mentor for Juniors.</p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">AUG 2021 - MAR 2022</span>
                        </div>
                    </div>

                    <div class="resume-item d-flex flex-column flex-md-row mb-5">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">Web Developer</h3>
                            <div class="subheading mb-3">Immply India Technology Pvt Ltd, Pune</div>
                            <p>Worked as a web application developer on multiple technologies and frameworks like Core PHP, ZF1, ZF3, Angular, Javascript, MySQL etc. Worked in agile methodology, troubleshooting bugs and defects in customer’s integration.</p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">OCT 2016 - JUL 2021</span>
                        </div>
                    </div>

                    <div class="resume-item d-flex flex-column flex-md-row mb-5">
                        <div class="resume-content mr-auto">
                            <h3 class="mb-0">Software Developer</h3>
                            <div class="subheading mb-3">Secure Net IT Solution, Pandharpur</div>
                            <p>Worked on developing web applications in multiple technologies based on requirements. Analyzed customer’s requirements. Reviewed and optimized existing project’s code. Worked on technologies  like Java, Spring, Hibernate. Interacted with customers for implementation.</p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">APR 2015 - OCT 2016</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;