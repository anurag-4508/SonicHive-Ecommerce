import React from "react";
import {
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaHatCowboy
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
    function redirectToLinkdein() {
        // Modify the URL below with your desired destination URL
        var url = "https://www.linkedin.com/in/anurag-mandloi/";
        window.location.href = url;
    }
    function redirectTogitHub() {
        // Modify the URL below with your desired destination URL
        var url = "https://github.com/anurag-4508";
        window.location.href = url;
    }

    function redirectToMe() {
        // Modify the URL below with your desired destination URL
        var url = "https://anuragmandloi.me";
        window.location.href = url;
    }
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon" onClick={() => redirectToLinkdein()}>
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaGithub size={14} onClick={() => redirectTogitHub()} />
                    </div>
                    <div className="icon">
                        <FaHatCowboy size={14} onClick={() => redirectToMe()} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
