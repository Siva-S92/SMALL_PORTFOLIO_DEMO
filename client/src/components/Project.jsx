import React from "react";
import Project1img from "../images/project1.png";
import Project2img from "../images/project2.png";
import Project3img from "../images/project3.png";

function Project() {
  return (
    <section className="flex flex-col bg-secondary py-5 border-b-4 border-[#43497f]" id="project">
      <div className="text-center pb-5">
        <span className="text-4xl font-bold border-b-4 border-[#8b8b98]">
          Projects
        </span>
        <p className="mt-5 px-5 text-yellow-200">These are some of my projects.. I have built these with the React, Vanila CSS and MERN .please check them out.</p>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center pb-10 px-10 gap-5 w-full">
        <div className="w-auto relative">
          <img
            className="h-[200px] w-[400px] border-2 rounded-lg shadow-lg"
            src={Project1img}
            alt="image not available"
          />
          <div className="project-info-effect">
            <p className="project-info-font">A Ecommerce web site built with MERN STACK</p>
          </div>
        </div>

        <div className="w-auto relative">
          <img
            className="h-[200px] w-[400px] border-2 rounded-lg shadow-lg"
            src={Project2img}
            alt="image not available"
          />
          <div className="project-info-effect">
            <p className="project-info-font">Food delivery application as like as Swiggy.</p>
          </div>
        </div>

        <div className="w-auto relative">
          <img
            className="h-[200px] w-[400px] border-2 rounded-lg shadow-lg"
            src={Project3img}
            alt="image not available"
          />
          <div className="project-info-effect">
            <p className="project-info-font">Basic Blog Web Site built with React JS, Node JS and MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
