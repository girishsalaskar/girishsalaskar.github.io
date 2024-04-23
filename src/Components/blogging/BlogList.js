import react, {Component} from "react";
import fs from "fs";

const blogDir = './blogs/';
class BlogList extends Component {
	constructor(props) {
		super(props);
		this.blogList = [];
		fs.readdir(blogDir, (err, files) => {
			console.log("files");
			console.log(files);
			console.log("err");
			console.log(err);
		});
	}
	state = {  }
	render() { 
		return ( <div></div> );
	}
}
 
export default BlogList;