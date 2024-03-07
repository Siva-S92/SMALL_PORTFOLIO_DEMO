import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "../images/sv_logo.png";

function Header() {
  const [toggleBar, setToggleBar] = useState(false);
  return (
    <>
      <header className="fixed z-50 top-0 w-full flex justify-between items-center px-5 bg-primary">
        <div className="flex items-center">
          <a href="" className="font-bold text-black text-2xl">
            SV SIVA{" "}
          </a>
          <span>
            <img className="w-[50px] h-[50px]" src={Logo} alt="" />
          </span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex text-white">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {toggleBar && (
          <nav className="block md:hidden">
            <ul onClick={() => setToggleBar(!toggleBar)} className="flex flex-col text-white mobile-nav">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        )}

        <button
          onClick={() => setToggleBar(!toggleBar)}
          className="block md:hidden"
        >
          <Bars3Icon className="text-white h-5" />
        </button>
      </header>
    </>
  );
}

export default Header;
