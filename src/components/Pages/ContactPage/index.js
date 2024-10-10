import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const linkedinUrl =
    "https://www.linkedin.com/in/fatma-kurtg%C3%B6z%C3%BC-5693aa288/";

  const githubUrl = "https://github.com/ftmkrtgz";
  return (
    <main>
      <h1 className="display-2 ms-3 mt-5">Get in touch</h1>
      <div>
        <span className="fs-1 ms-3">
          {" "}
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <span className="fs-4"> salihagemici.123@gmail.com</span>
        </span>
      </div>
      <div>
        <span className="fs-1 ms-3">
          <FontAwesomeIcon icon={faPhone} />{" "}
          <span className="fs-4">+47 463 91 484</span>
        </span>
      </div>
      <div>
        <h1 className="display-2 ms-3 mt-5">Or visit my social media</h1>
        <Link to={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <span className="fs-1 ms-5 icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </Link>
        <Link to={githubUrl} target="_blank" rel="noopener noreferrer">
          <span className="fs-1 ms-4 icon">
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </Link>
      </div>
    </main>
  );
}

export default Contact;
