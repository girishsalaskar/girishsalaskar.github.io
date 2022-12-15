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
                                                <img src="https://img.shields.io/badge/Mail%20To-girishsalaskar812@gmail.com-red?style=for-the-badge&logo=gmail" alt="" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                                {/* <span className="fa-stack fa-lg">
                                                    <i className="fa fa-circle fa-stack-2x"></i>
                                                    <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
                                                </span> */}
                                            <img src="https://img.shields.io/badge/Message-%2B91--9665--703062-red?style=for-the-badge&logo=whatsapp" alt="" title="Message or Call on +91-9665-703062" />
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
                                                <img src="https://img.shields.io/badge/Facebook-Connect-red?style=for-the-badge&logo=facebook" alt="" />
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
                                                <img src="https://img.shields.io/badge/LinkedIn-Connect-red?style=for-the-badge&logo=linkedin" alt="" />
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
                                        <li className="list-inline-item"><a href="https://github.com/girishsalaskar" target="_blank" title="Github Profile"><img src="https://img.shields.io/github/followers/girishsalaskar?color=red&label=Github&logo=github&style=for-the-badge" alt="" /></a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/girishsalaskar" target="_blank" title="Follow on Twitter"><img src="https://img.shields.io/twitter/follow/girishsalaskar?color=red&label=Follow&logo=twitter&style=for-the-badge" alt="" /></a></li>
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