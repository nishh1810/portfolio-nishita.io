import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
    const navigate = useNavigate(); // Initialize the navigation hook

    useEffect(() => {
        document.title = `404 | ${INFO.main.title}`;
        navigate("/"); // Redirect immediately
    }, [navigate]);

    return null; // Since it's redirecting immediately, no UI is required
};

export default Notfound;
