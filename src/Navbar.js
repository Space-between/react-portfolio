import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav
      className="flex p-2 w-full justify-end text-gray-700 z-10 nav-footer"
      style={{ position: "fixed", top: 0, right: 0, color: "white" }}
    >
      <Link
        className="mr-1 cursor-pointer hover:text-teal-400"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About
      </Link>
      <Link
        className="ml-4 cursor-pointer hover:text-teal-400"
        activeClass="active"
        to="project"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Project
      </Link>
      <Link
        className="ml-4 cursor-pointer hover:text-teal-400"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </Link>
    </nav>
  );
}
