import React from "react";
import ResumeImage from "../images/resume.png";

function Resume() {
  return (
    <>
      <section className="bg-secondary py-5 border-b-4 border-[#43497f]" id="resume">
        <div className="flex flex-col md:flex-row px-10">
          <div className="w-full md:w-1/2">
            <img className="mx-auto" src={ResumeImage} alt="image not available" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-5 text-white">
            <h1 className="text-4xl font-bold mb-5 border-b-4 border-[#8b8b98]">
              Resume
            </h1>
            <p className="mb-5">
              You can view my resume here.... <a className="text-[#ee506a] custombtn" href="">Download</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
