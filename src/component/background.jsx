import React from "react";
import PropTypes from "prop-types";

import WOW from "wowjs";
import linkdin from "../img/linkedin-32.png"
import github from "../img/github-32.png"

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className = "link-container d-flex justify-content-between">
				<a
				href="https://www.linkedin.com/in/devvivek/"
				target="_blank"
				rel="noopener noreferrer"><img className="img-fluid" src={linkdin} alt=""/>
				</a>
				<a
				href="https://github.com/vk16309"
				target="_blank"
				rel="noopener noreferrer"><img className="img-fluid" src={github} alt=""/>
				</a>
						
					</div>
				<div className="top-container flex">
					<h1>
						Hello, I&apos;m Vivek Kumar.
						<br />
						I&apos;m a Back End Developer.
					</h1>
					{/* offset can be cahnged in node modules wowjs default file */}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						View my work
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
