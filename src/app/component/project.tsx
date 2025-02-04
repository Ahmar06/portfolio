import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-xl font-medium title-font mb-4 text-black">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={'/images/project1.png'}
                  width={600}
                  height={600}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                   E-Commerce Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    E-Commerce Website
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  Developed a modern e-commerce website featuring responsive design, seamless navigation, and secure payment integration to enhance user experience and drive online sales.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://template-4-e-commerce-website.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={'/images/project2.png'}
                  width={600}
                  height={600}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Admin Dashboard Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Admin Dashboard
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  Designed and developed a dynamic admin dashboard with intuitive data visualization, real-time analytics, and robust user management features for efficient operations.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://admin-dashboard-one-woad-14.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={"/images/project3.png"}
                  width={600}
                  height={600}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Resume Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Static Resume Builder
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  Created a user-friendly resume builder application with customizable templates, real-time previews, and seamless PDF export functionality to streamline the job application process.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://milestones1-2-ruddy.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;