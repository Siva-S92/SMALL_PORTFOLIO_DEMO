import React from "react";
import ResumeImage from "../images/resume.png";

function Contact() {
  return (
    <>
      <section className="bg-secondary py-5 border-b-4 border-[#43497f]" id="contact">
        <div className="text-center text-white">
          <span className="text-4xl font-bold">
            Contact Me
          </span>
          <p className="my-5">
            If you want to discuss more in detail, please contact me here..
          </p>
          <p className="py-2"><span className="font-bold">Email: </span>sivagraphics4fashion@gmail.com</p>
          <p className="py-2"><span className="font-bold">Phone: </span>+91 9840350329</p>
        </div>
      </section>
    </>
  );
}

export default Contact;
