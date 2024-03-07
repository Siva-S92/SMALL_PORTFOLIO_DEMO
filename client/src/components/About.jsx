import React from "react";
import AboutImage from "../images/About1.png";

function About() {
  return (
    <>
      <section className="bg-secondary py-5 border-b-4 border-[#43497f]" id="about">
        <div className="flex justify-center pt-5">
          <h1 className=" text-4xl  text-[#26272a] pb-2 font-bold border-b-4 border-primary1 px-5">
            Technology Proficiencies
          </h1>
        </div>
        <div className="flex flex-col md:flex-row px-10">
          <div className="w-full md:w-1/2">
            <img src={AboutImage} alt="image not available" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl font-bold mb-5 border-b-4 border-[#8b8b98]">
              About Me
            </h1>
            <p className="mb-5">
              I'm a fullstack Web Developer, I have built some beautiful
              websites using HTML, CSS, Bootstrap,Javascript, React JS and
              Tailwind CSS.
              <br /> I am proficient in the Frontend Technology like building
              the User Interfaces with React, Redux, Redux Tool Kit, Axios,
              Tailwind CSS, CSS3, Bootstrap and many more.....
            </p>
            <p>
              I do work with the Backend Technology also. I'm having experiences
              with Node Js, Express Js,React and Mongo DB. Love to working as a
              Fullstack Developer and greedy to learn new technologies as well.
              I really love to build the Web applications with the latest
              technologies. Hope that we would work together for our dream
              projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
