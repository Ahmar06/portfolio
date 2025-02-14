
import Link from "next/link";
import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">M.Ahmer Ali</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 M.Ahmer Ali
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            
              <Link target="_blank" href={"https://www.facebook.com/profile.php?id=100052642043793"}>
              <FaFacebook className="text-3xl hover:text-blue-600 mr-2"/>
              </Link>
              <Link target="_blank" href={"https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"}>
              <FaLinkedin className="text-3xl hover:text-blue-600 mr-2"/>
              </Link>
              <Link target="_blank" href="https://www.instagram.com/muhammad___ahmar/">
              <FaInstagramSquare className="text-3xl hover:text-indigo-600 mr-2"/>
              </Link>
              <Link href={""}>
              <BsYoutube className="text-3xl hover:text-[#ff0000] mr-2" />
              </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;