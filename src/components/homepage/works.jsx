import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/works.css";

const Works = () => {
  return (
    <div className="works-body">
      <div className="work">
        <div className="work-image">
          <FontAwesomeIcon icon={faBriefcase} className="work-image" />
        </div>
        <div>
          <h3 className="work-title">Front-End Manager</h3>
          <h4 className="work-subtitle">Pizzaiolo</h4>
          <p className="work-duration">March 2023 - Current</p>
          <ul>
            <li>Supervise front-end staff and manage customer orders</li>
            <li>Ensure smooth operations at the front desk</li>
            <li>Handle customer inquiries and ensure a high standard service</li>
            <li>Oversee cashier operations and ensure accuracy</li>
          </ul>
        </div>
      </div>

      <div className="work">
        <div className="work-image">
          <FontAwesomeIcon icon={faBriefcase} className="work-image" />
        </div>
        <div>
          <h3 className="work-title">Web Developer Intern</h3>
          <h4 className="work-subtitle">Airport School Ahmedabad</h4>
          <p className="work-duration">May 2022 – Nov 2022</p>
          <ul>
            <li>Assisted in designing and building web pages using HTML, CSS, and JavaScript</li>
            <li>Debugged and resolved basic website issues to ensure functionality</li>
            <li>Collaborated with team members on projects and gained experience with tools like GitHub</li>
            <li>Tested website features for responsiveness across devices and documented updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Works;
