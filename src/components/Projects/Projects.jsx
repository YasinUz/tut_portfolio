import React from "react";
import "./projects.scss";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Projects = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselStyle = {
    height: "60%",
    width: "80%",
    position: "relative",
  };

  const slideStyles = {
    height: "100%",
    width: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "15px",
    fontSize: "2rem",
    color: "fff",
    zIndex: "2",
    cursor: "pointer",
  };

  const rightButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "15px",
    fontSize: "2rem",
    color: "fff",
    zIndex: "2",
    cursor: "pointer",
  };

  const previousSlide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="projects">
      <div className="carousel_container" style={carouselStyle}>
        <button style={leftButtonStyle} onClick={previousSlide}>
          <AiOutlineArrowLeft />
        </button>
        <button style={rightButtonStyle} onClick={nextSlide}>
          <AiOutlineArrowRight />
        </button>

        <div className="carousel" style={slideStyles}>
          test
        </div>
      </div>
    </section>
  );
};

export default Projects;
