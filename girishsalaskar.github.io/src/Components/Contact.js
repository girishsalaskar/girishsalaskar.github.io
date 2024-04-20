import react, { Component } from "react";

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                    <h2 className="mb-5">Contact Me</h2>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Permenant Address</td>
                                <td>
                                    <address>
                                        <strong>Girish Arun Salaskar</strong><br/>
                                        Opp. Mahadev Temple, A/p Khardi<br/>
                                        Tal. Pandharpur,<br/>
                                        Dist. Solapur.<br/>
                                        Pin: 413317
                                    </address>
                                </td>
                            </tr>
                            <tr>
                                <td>Contact me</td>
                                <td>
                                    <ul className="list-inline list-social-icons mb-0">
                                        <li className="list-inline-item">
                                            <a href="mailto:girishsalaskar812@gmail.com" title="girishsalaskar812@gmail.com">
                                                {/* <span className="fa-stack fa-lg">
                                                    <i className="fa fa-circle fa-stack-2x"></i>
                                                    <i className="fa fa-envelope-o fa-stack-1x fa-inverse"></i>
                                                </span> */}
                                                <img src="https://img.shields.io/badge/Mail-girishsalaskar812%40gmail.com-%23868e96?style=for-the-badge&logo=gmail&logoColor=white&labelColor=%23BD5D38&color=%23868e96" alt="" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                                {/* <span className="fa-stack fa-lg">
                                                    <i className="fa fa-circle fa-stack-2x"></i>
                                                    <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
                                                </span> */}
                                            <a href="https://wa.me/+919665703062">
                                                <img src="https://img.shields.io/badge/Message-%2B91--9665703062-%23868e96?style=for-the-badge&logo=whatsapp&logoColor=white&labelColor=%23BD5D38&color=%23868e96" alt="" title="Message on +91-9665-703062" />
                                            </a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Connect me</td>
                                <td>
                                    <ul className="list-inline list-social-icons mb-0">
                                        <li className="list-inline-item">
                                            <a href="https://facebook.com/girishsalaskar812" target="_blank">
                                                {/* <span className="fa-stack fa-lg">
                                                    <i className="fa fa-circle fa-stack-2x"></i>
                                                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                                </span> */}
                                                <img src="https://img.shields.io/badge/Facebook-Connect-%23868e96?style=for-the-badge&logo=facebook&logoColor=white&labelColor=%23BD5D38&color=%23868e96" alt="" />
                                            </a>
                                        </li>
                                        {/* <li className="list-inline-item">
                                            <a href="https://twitter.com/girishsalaskar" target="_blank">
                                                <span className="fa-stack fa-lg">
                                                    <i className="fa fa-circle fa-stack-2x"></i>
                                                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </a>
                                        </li> */}
                                        <li className="list-inline-item">
                                            <a href="https://www.linkedin.com/in/girish-salaskar/" target="_blank">
                                                {/* <span className="fa-stack fa-lg">
                                                    <i className="fa fa-circle fa-stack-2x"></i>
                                                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                                </span> */}
                                                <img src="https://img.shields.io/badge/LinkedIn-Connect-%23868e96?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=%23BD5D38&color=%23868e96" alt="" />
                                            </a>
                                        </li>
                                        {/* <li className="list-inline-item">
                                            <a href="https://github.com/girishsalaskar" target="_blank">
                                                <span className="fa-stack fa-lg">
                                                    <i className="fa fa-circle fa-stack-2x"></i>
                                                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </a>
                                        </li> */}
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Follow Me</td>
                                <td>
                                    <ul className="list-inline list-social-icons mb-0">
                                        <li className="list-inline-item"><a href="https://github.com/girishsalaskar" target="_blank" title="Github Profile"><img src="https://img.shields.io/github/followers/girishsalaskar?style=for-the-badge&logo=github&logoColor=white&label=GitHub&labelColor=%23BD5D38&color=%23868e96" alt="" /></a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/intent/follow?screen_name=girishsalaskar" target="_blank" title="Follow on Twitter"><img src="https://img.shields.io/twitter/follow/girishsalaskar?style=for-the-badge&logo=x&logoColor=white&label=Follow&labelColor=%23BD5D38&color=%23868e96" alt="" /></a></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Contact;