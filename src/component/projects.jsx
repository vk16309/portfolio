import React from "react";
import Vmarine from "../img/Vmarine.jpg";
import aguaDeLuz from "../img/aguaDeLuz.png";
import todo from "../img/todolist.png";
import silverLining from "../img/silverLining.JPG";
import gPortal from "../img/gPortal.JPG";
import fintor from "../img/fintor.JPG";
import PropTypes from "prop-types";
import plusIcon from "../img/plus-sign.png";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<p className = "text-center text-white">
							I'm more of a backend developer. I mostly design and build backend APIs.<br />
							I have also developed frontend using jQuery in quite a few projects.
						</p>
						
						<div className="card-deck row my-5">

							<div
								className={
									" card border-light shadow testbg  " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Silverlining</h2>
									</div>
									<div>
									
										<button
											id="vmarine-button"
											className="btn btn-regular project-button btn-primary btn-lg"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"vmarine"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											Visit Website
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"card border-light shadow aguabg " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Grievance Portal</h2>
									</div>
									<div>
										<button
											id="agua-button"
											className="btn btn-regular project-button btn-primary btn-lg"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"agualuz"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											Visit Website
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"card border-light shadow todobg  " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>fintor</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="btn btn-regular project-button btn-primary btn-lg"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Visit Website
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="vmarine" className="modal-card">
						<div className="visual">
							<img src={silverLining} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Silverlining</h2>
							<div className="modal-description">
								<ul>
									<li>
									“Silverlining”, a web application aimed to launch for the
benefit of the people staying in the disaster prone areas. 
									</li>
									<li>
									As part of the project, I
developed the back-end functionalities of the website using Django REST framework.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
							<a
									className = "btn btn-regular btn-primary btn-lg"
									href="https://www.silverlining-global.com/"
									target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"vmarine"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="agualuz" className="modal-card">
						<div className="visual">
							<img src={gPortal} alt=""/>
						</div>
						<div className="modal-info">
							<h2>gPortal</h2>
							<div className="modal-description">
								<ul>
									<li>
									Student Grievance Support System to handle grievances of students at various levels.
									</li>
									<li>
										Separate authentication system for admin and students.
									</li>
									<li>
									Created single page application with JQuery using AJAX
									</li>
									<li>
									Developed Web API in DJANGOREST Framework.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									className = "btn btn-regular btn-primary btn-lg"
									href="https://gportal.netlify.app/"
									target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"agualuz"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={fintor} alt=""/>
						</div>
						<div className="modal-info">
							<h2>fintor</h2>
							<div className="modal-description">
								<ul>
									<li>
										Portal to find teachers in your city.
									</li>
									<li>
										Developed webapp using Django and bootstrap.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a className = "btn btn-regular btn-primary btn-lg" href="https://github.com/vk16309/kyapata" target="_blank">
									<h3>github link</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
