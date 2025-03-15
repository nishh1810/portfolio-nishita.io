import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.round(window.pageYOffset, 2);

      let newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const currentSEO = SEO.find((item) => item.page === "home");

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content={currentSEO.keywords.join(", ")}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container">
            <Logo width={46} />
            <h1>Hi, I'm Nishita Sachdev</h1>
          </div>
          <div className="homepage-container">
      <div className="homepage-first-area">
        <div className="homepage-first-area-left-side">
          <div className="title homepage-title">
            <h4>Full-Stack Developer & Team Lead</h4>
            <p className="subtitle">
              Building and leading the development of the <strong>TechBarter Web App</strong>, a platform enabling seamless exchange of tech parts.
            </p>
          </div>

          <div className="homepage-subtitle">
            <p>
              I specialize in full-stack development, leveraging the power of the <strong>MEAN</strong> and <strong>MERN</strong> stacks, along with <strong>Spring Boot</strong> for robust API development to build scalable,
              secure, and user-centric web applications. With a strong focus on performance optimization, intuitive UI/UX design, and efficient 
              database management, I thrive on transforming co mplex ideas into impactful digital solutions. As a dedicated problem solver, I excel at crafting solutions
              that meet both user needs and business objectives. As the team lead, I use my expertise to guide a talented group of developers in delivering top-notch features
              for our platform.
            </p>
            <p>
              Beyond leading the project, I continuously apply my technical skills to enhance the platform’s functionality and performance, ensuring smooth, user-centric experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="homepage-socials">
        <a
          href={INFO.socials.github}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="homepage-social-icon"
          />
        </a>
        <a
          href={`mailto:${INFO.main.email}`}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faMailBulk}
            className="homepage-social-icon"
          />
        </a>
        <a
          href={INFO.socials.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="homepage-social-icon"
          />
        </a>
      </div>

      <div className="homepage-skills-works"> 
        <div className="homepage-skills">
          <h2>Key Skills & Technologies</h2>
          <ul className="skills-list">
            <li>⚙️ Node.js & Express</li>
            <li>💻 React & JavaScript</li>
            <li>☕ Java & Spring Boot</li>
            <li>🐍 Python & PHP</li>
            <li>📱 Kotlin, Flutter, React Native</li>
            <li>🗄️ MongoDB, PostgreSQL, MySQL, Oracle SQL</li>
            <li>🚀 Jenkins, CI/CD, Git</li>
            <li>🖥️ Visual Studio, IntelliJ, Android Studio</li>
            <li>🎨 Figma, Adobe Photoshop</li>
            <li>📂 FileZilla, Visual Paradigm</li>
          </ul>
        </div>

        <div className="homepage-works">
          <Works />
        </div>
      </div>

            <div className="homepage-projects">
              <AllProjects />
            </div>

            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
        </div>
    </React.Fragment>
  );
};

export default Homepage;
