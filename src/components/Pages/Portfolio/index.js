import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import holidazeImage from "../../../assets/images/project-exam-2.png";
import onlineAuctionImage from "../../../assets/images/semester-project-2.png";
import buySellEcomImage from "../../../assets/images/javascript-frameworks.png";
import squareEyesImage from "../../../assets/images/cross-course.png";
import communityScienceMuseumImage from "../../../assets/images/semester-project-1.png";
import childDevelopmentImage from "../../../assets/images/project-exam-1.png";

function Portfolio() {
  const projects = [
    {
      name: "Community Science Museum",
      description:
        "A science museum site which was a semester project for school in the first year",
      image: communityScienceMuseumImage,
      url: "https://starlit-biscuit-620fec.netlify.app/",
      codeUrl: "https://github.com/ftmkrtgz/Semester-Project-1",
      tags: [
        { name: "CSS", class: "tag-css" },
        { name: "HTML", class: "tag-html" },
      ],
    },
    {
      name: "Square Eyes",
      description:
        "A movies site integrated with Wordpress and WooCommerce API.",
      image: squareEyesImage,
      url: "https://gulce.netlify.app/",
      codeUrl:
        "https://github.com/Noroff-FEU-Assignments/cross-course-project-ftmkrtgz/tree/Cms",
      tags: [
        { name: "JavaScript", class: "tag-js" },
        { name: "CSS", class: "tag-css" },
        { name: "HTML", class: "tag-html" },
      ],
    },

    {
      name: "Child Development",
      description:
        "A blog site which was project exam for school in the first year. Content is served from a headless Wordpress installation.",
      image: childDevelopmentImage,
      url: "https://childevelopment.netlify.app/",
      codeUrl:
        "https://github.com/Noroff-FEU-Assignments/project-exam-1-ftmkrtgz",
      tags: [
        { name: "JavaScript", class: "tag-js" },
        { name: "CSS", class: "tag-css" },
        { name: "HTML", class: "tag-html" },
      ],
    },
    {
      name: "Online Auction",
      description:
        "An Auction site with all API functionality which is managed by an existing application.",
      image: onlineAuctionImage,
      url: "https://online-auction-site.netlify.app/",
      codeUrl: "https://github.com/ftmkrtgz/Semester-Project-2",
      tags: [
        { name: "JavaScript", class: "tag-js" },
        { name: "API", class: "tag-api" },
        { name: "Bootstrap", class: "tag-bootstrap" },
        { name: "SASS", class: "tag-sass" },
        { name: "CSS", class: "tag-css" },
        { name: "HTML", class: "tag-html" },
      ],
    },
    {
      name: "Buy Sell Ecom",
      description:
        "An Auction site with all API functionality which is managed by an existing application.",
      image: buySellEcomImage,
      url: "https://buy-sell-ecom.netlify.app/",
      codeUrl: "https://github.com/ftmkrtgz/js-frameworks",
      tags: [
        { name: "React", class: "tag-react" },
        { name: "API", class: "tag-api" },
        { name: "Bootstrap", class: "tag-bootstrap" },
        { name: "SASS", class: "tag-sass" },
        { name: "CSS", class: "tag-css" },
        { name: "HTML", class: "tag-html" },
      ],
    },
    {
      name: "Summer Holidaze",
      description: "Booking site with working the official API documentation",
      image: holidazeImage,
      url: "https://summerholidaze.netlify.app",
      codeUrl: "https://github.com/ftmkrtgz/project-exam-2/tree/master",
      tags: [
        { name: "React", class: "tag-react" },
        { name: "API", class: "tag-api" },
        { name: "Bootstrap", class: "tag-bootstrap" },
        { name: "SASS", class: "tag-sass" },
        { name: "CSS", class: "tag-css" },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const getVisibleProjects = () => {
    const prevIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    const nextIndex = (activeIndex + 1) % projects.length;
    return [projects[prevIndex], projects[activeIndex], projects[nextIndex]];
  };

  return (
    <div className="portfoli">
      <h1 className="mb-4 text-center fw-semibold mt-4 display-3">
        Some things I've worked on
      </h1>
      <div className="carousel-container">
        <div className="cards">
          {getVisibleProjects().map((project, index) => (
            <div
              key={index}
              className={`card ${index === 1 ? "active" : ""}`}
              onClick={() =>
                handleCardClick(
                  (activeIndex + index - 1 + projects.length) % projects.length
                )
              }
            >
              {project.image && (
                <img
                  className="work-item-image"
                  src={project.image}
                  alt={project.name}
                />
              )}
              <h3 className="work-item-title mt-3 ms-2">{project.name}</h3>
              {project.tags && (
                <div className="tags ms-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`tag ${tag.class}`}>
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
              <p className="work-item-tag ms-2">{project.description}</p>
              <div className="work-item-button">
                <Link
                  to={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-light fw-semibold fs-5"
                >
                  <FontAwesomeIcon icon={faCode} />
                </Link>

                <div className="live-view-button">
                  {project.url && (
                    <Link
                      to={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-light fw-semibold live-view-button view"
                    >
                      Live View
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="arrow-container">
        <button onClick={handlePrev} className="arrow left">
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </button>
        <button onClick={handleNext} className="arrow right">
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
