import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    href: "https://github.com/giozauta",
    icon: faSquareGithub,
  },
  {
    href: "https://www.linkedin.com/in/giorgi-zautashvili-9779a7215",
    icon: faLinkedin,
  },
  {
    href: "https://www.facebook.com/zautagio",
    icon: faSquareFacebook,
  },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[999] w-full h-[70px] px-[30px] bg-[rgba(255,255,255,0.113)] backdrop-blur-[10px] shadow-[0_0_15px_#72a1de68]  flex items-center justify-between">
      {/* Logo + Name */}
      <div className="flex items-center h-full">
        <img
          src="images/man.png"
          alt="logo"
          className="w-[35px] h-[35px] mr-2"
        />
        <h1 className="text-xl font-bold text-white ">
          Giorgi   <span className=" ">Zautashvili</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center justify-between bg-[rgba(0,0,69,0.30)] backdrop-blur-[10px] shadow-[0_0_10px_#727fde65] rounded-[10px] py-[15px] px-[15px] lg:w-[30%]">
        {["About", "Skills", "Projects"].map((label, index) => (
          <li key={index}>
            <Link
              to="#"
              className="mx-[10px] font-bold text-white no-underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>



      {/* Social Icons */}
      <div className="hidden md:flex gap-[40px] ">

        {socialLinks.map(({ href, icon }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[30px] h-[30px] flex items-center  justify-center rounded-full border-2 border-[#727fde] text-[20px] no-underline transition duration-300 hover:bg-[#727fde] hover:text-black shadow-[0_0_15px_#727fde6f]"
          >
            <FontAwesomeIcon icon={icon} className="w-4" />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
