import react, {Component} from "react";
import BlogList from "./BlogList";

class Blog extends Component {
	constructor(props) {
		super(props);
	}
	state = {  }
	render() { 
		return ( 
			<section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
				<div className="my-auto">
					<h1 className="mb-5">Blogs</h1>
					<BlogList />
				</div>
			</section> );
	}
}
 
export default Blog;