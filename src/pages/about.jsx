import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-logo-container">
            <div className="about-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">
                  {INFO.about.title}
                </div>

                <div className="subtitle about-subtitle">
                  {INFO.about.description}
                </div>
              </div>

              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img
                      src="about.jpg"
                      alt="about"
                      className="about-image"
                    />
                  </div>
                </div>

                <div className="about-socials">
                  <Socials />
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <section className="bio-section">
              <h2>Bio</h2>
              <p>{INFO.about.bio}</p>
            </section>

            <div className="sections-row">
			<section className="resume-section">
				<h2>Resume</h2>
				<a href={INFO.about.resumeLink} target="_blank" rel="noopener noreferrer">
				View my Resume
				</a>
			</section>

			<section className="cover-letter-section">
				<h2>Cover Letter</h2>
				<a href={INFO.about.coverLetter} target="_blank" rel="noopener noreferrer">
				View my Cover Letter
				</a>
			</section>

			<section className="academic-credentials-section">
				<h2>Academic Credentials</h2>
				<ul>
				{INFO.about.academicCredentials.map((credential, index) => (
					<li key={index}>{credential}</li>
				))}
				</ul>
			</section>
			</div>


            {/* Philosophy/Statement of Career Goal */}
            <section className="philosophy-section">
              <h2>Philosophy/Statement of Career Goal</h2>
              <p>{INFO.about.philosophy}</p>
            </section>

           

            <div className="about-socials-mobile">
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

export default About;
