import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, technologies, functionality, linkText, link } = props;
	console.log(Project)
	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-tech">
							<h4>Tech Stack:</h4>
							<ul>
								{technologies && technologies.length > 0 ? (
									technologies.map((tech, index) => (
										<li key={index}>{tech}</li>
									))
								) : (
									<p>No tech stack available</p>
								)}
							</ul>
						</div>
						<div className="project-functionality">
							<h4>Functionalities:</h4>
							<ul>
								{functionality && functionality.length > 0 ? (
									functionality.map((functionality, index) => (
										<li key={index}>{functionality}</li>
									))
								) : (
									<p>No functionalities available</p>
								)}
							</ul>
						</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};


export default Project;
