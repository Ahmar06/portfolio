"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font  bg-cover bg-center custom-image">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-600">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI/UX Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700"></div>
          <p className="mb-8 mt-3 leading-relaxed text-blue-100">
          "Welcome! I am S.M.Ahmar Ali, a passionate Web Developer dedicated to crafting impactful and innovative solutions. With a keen eye for detail and a love for creativity, I bring ideas to life through Next.js,Tailwind CSS, Shadcn/ui, Sanity.io. Whether its building seamless digital experiences or solving complex problems, I thrive on turning visions into reality. Explore my work and let's create something amazing together!"
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto "
            alt="hero"
            width={350}
            height={350}
            src={"/images/ahmarali.jpeg"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;