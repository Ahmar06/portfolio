import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Header = () => {
  return (
    <div className="bg-blue-600 z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl font-bold">Protfolio Website</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 font-bold text-black  hover:underline">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 font-bold text-black hover:underline">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 font-bold text-black hover:underline">
              Skills
            </Link>
            <Link href={"#project"} className="mr-5 font-bold text-black hover:underline">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 font-bold text-black hover:underline">
              Contact
            </Link>
          </nav>
          <a href="/assests/cv/myCv.pdf">
            <button className="inline-flex items-center text-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <AiOutlineCloudDownload className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
