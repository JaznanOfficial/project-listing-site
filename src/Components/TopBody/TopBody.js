import React from "react";
import "./TopBody.css";

const TopBody = () => {
    return (
        <div className="top-body d-lg-flex flex-row align-items-center justify-content-center py-3">
            <div className="social-link">
                <h1>
                    <a href="https://github.com/Jaznanofficial" target="_blank" title="Github">
                        <i className="fab fa-github text-light text-center github"></i>
                    </a>
                </h1>
                <h1>
                    <a
                        href="https://www.linkedin.com/in/jaznanofficial/"
                        target="_blank"
                        title="LinkedIn"
                    >
                        <i className="fab fa-linkedin text-light text-center linkedin"></i>
                    </a>
                </h1>
                <h1>
                    <a
                        href="https://www.facebook.com/mdabdurrahman30/"
                        target="_blank"
                        title="Facebook"
                    >
                        <i className="fab fa-facebook text-light text-center fb"></i>
                    </a>
                </h1>
                <h1>
                    <a href="mailto:jaznanofficial@gmail.com" target="_blank" title="Mail">
                        <i className="fas fa-envelope-open-text text-light text-center mail"></i>
                    </a>
                </h1>
            </div>
        </div>
    );
};

export default TopBody;
