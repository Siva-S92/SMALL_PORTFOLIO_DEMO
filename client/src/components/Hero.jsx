import React from "react";
import HeroImage from "../images/Hero1.png";
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

function Hero() {
  return (
    <>
      <section className="flex flex-col md:flex-row px-10 py-32 bg-secondary justify-center border-b-4 border-[#43497f] mt-10" id="hero">
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className=" text-white text-6xl font-hero-font">
            Hi, <br /> I'm <span className="text-black">SV</span> SIVA
          </h1>
          <p className=" text-white text-2xl font-hero-font">I'm a Fullstack Developer</p>
          <div className="flex py-10">
            <a href="" className="mr-5 hover:text-white"><AiOutlineTwitter size={50}/></a>
            <a href="" className="mr-5 hover:text-white"><AiOutlineFacebook size={50}/></a>
            <a href="" className="mr-5 hover:text-white"><AiOutlineLinkedin size={50}/></a>
          </div>
        </div>
        <img className="w-full md:w-1/3" src={HeroImage} alt="image not available" />
      </section>
    </>
  );
}

export default Hero;
