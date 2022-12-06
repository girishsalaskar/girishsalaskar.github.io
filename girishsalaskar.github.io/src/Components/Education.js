import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
            <div className="my-auto">
                <h2 className="mb-5">Education</h2>

                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                    <div className="resume-content mr-auto">
                        <h3 className="mb-0">Solapur University, Solapur</h3>
                        <div className="subheading mb-3">Master of Computer Application (MCA)</div>
                        <div>Computer Science</div>
                        {/* <p>GPA: 3.23</p> */}
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">JUN 2012 - APR 2016</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row">
                    <div className="resume-content mr-auto">
                        <h3 className="mb-0">Bharati Vidyapeeth Deemed University</h3>
                        <div className="subheading mb-3">Bachelor of Computer Application (BCA)</div>
                        <div>Computer Application</div>
                        {/* <p>GPA: 3.56</p> */}
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">JUN 2008 - APR 2011</span>
                    </div>
                </div>

            </div>
        </section>);
    }
}

export default Education;