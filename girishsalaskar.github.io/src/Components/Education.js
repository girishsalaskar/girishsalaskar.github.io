import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
            <div class="my-auto">
                <h2 class="mb-5">Education</h2>

                <div class="resume-item d-flex flex-column flex-md-row mb-5">
                    <div class="resume-content mr-auto">
                        <h3 class="mb-0">Solapur University, Solapur</h3>
                        <div class="subheading mb-3">Master of Computer Application (MCA)</div>
                        <div>Computer Science</div>
                        {/* <p>GPA: 3.23</p> */}
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">JUN 2012 - APR 2016</span>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row">
                    <div class="resume-content mr-auto">
                        <h3 class="mb-0">Bharati Vidyapeeth Deemed University</h3>
                        <div class="subheading mb-3">Bachelor of Computer Application (BCA)</div>
                        <div>Computer Application</div>
                        {/* <p>GPA: 3.56</p> */}
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">JUN 2008 - APR 2011</span>
                    </div>
                </div>

            </div>
        </section>);
    }
}

export default Education;