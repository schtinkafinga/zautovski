import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

const Header: React.FC = () => {
  return (
    <div className="header-box   sticky flex w-[100%] min-h-[70px] top-0 left-0 right-0 items-center justify-between h-[70px] bg-[rgba(255,255,255,0.113)] backdrop-blur-[10px] px-[30px] py-0 shadow-[0_0_15px_#72a1de68] z-[999] ">
      <div className="left flex items-center justify-center  h-full">
        <img
          src="images/logo1.png"
          alt="logo"
          className="w-[70px]  h-full mr-2"
        />
        <h1 className="text-xl font-bold text-white">
          <span className="text-[#72a1de]">Giorgi</span> Zautashvili
        </h1>
      </div>

      <ul className="flex justify-between w-[30%] py-[15px] px-[15px] rounded-[50px] bg-[rgba(0,0,69,0.30)] backdrop-blur-[10px] shadow-[0_0_15px_#727fde65]">
        <li className="list-none">
          <Link className="no-underline text-white font-bold mx-[10px]" to="#">
            About
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-white font-bold mx-[10px]" to="#">
            Skills
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-white font-bold mx-[10px]" to="#">
            Projects
          </Link>
        </li>
      </ul>

      <div className="box-icons flex gap-[40px]">
        <a
          href="https://github.com/giozauta"
          className="flex justify-center items-center text-[20px] w-[30px] h-[30px] border-2 border-[#727fde] no-underline color-lightgray rounded-[50%] transition duration-300 hover:bg-[#727fde] hover:text-black shadow-[0_0_15px_#727fde6f]"
        >
          <FontAwesomeIcon icon={faSquareGithub} className="w-4" />
        </a>
        <a
          href="www.linkedin.com/in/giorgi-zautashvili-9779a7215"
          className="flex justify-center items-center text-[20px] w-[30px] h-[30px] border-2 border-[#727fde] no-underline color-lightgray rounded-[50%] transition duration-300 hover:bg-[#727fde] hover:text-black shadow-[0_0_15px_#727fde6f]"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-4" />
        </a>
        <a
          href="https://www.facebook.com/zautagio"
          className="flex justify-center items-center text-[20px] w-[30px] h-[30px] border-2 border-[#727fde] no-underline color-lightgray rounded-[50%] transition duration-300 hover:bg-[#727fde] hover:text-black shadow-[0_0_15px_#727fde6f]"
        >
          <FontAwesomeIcon icon={faSquareFacebook} className="w-4 " />
        </a>
      </div>
    </div>
  );
};

export default Header;
