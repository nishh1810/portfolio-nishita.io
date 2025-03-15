import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let’s Connect and Build Something Great!
						</div>

						<div className="subtitle contact-subtitle">
						<p>
						Thank you for your interest in connecting with me! Whether you have questions, feedback, or ideas to share, I'm always happy to hear from you.  
						Feel free to email me directly at{" "}
						<a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>.  
						You can also connect with me on{" "}
						<a href={INFO.socials.github} target="_blank" rel="noreferrer">
							GitHub
						</a>{" "} 
						or{" "}
						<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
							LinkedIn
						</a>  
						. if you’d like to collaborate or stay updated on my work.  

						Looking forward to hearing from you!
						</p>

						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
