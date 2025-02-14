import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[900px] h-[300px]"
              alt="hero"
              src={"https://st2.depositphotos.com/1265075/8085/i/380/depositphotos_80854270-stock-photo-about-me-key-button.jpg"}
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
            Hi, I am a passionate Web Developer with a deep love for Next.js, Tailwind CSS, Sanity.io, and shadcn/ui. With 6 months of experience, I specialize in creating user-friendly websites and innovative solutions that blend creativity and functionality. I am always eager to learn, grow, and take on new challenges. When I am not working. Lets connect and create something incredible together!
            </p>
            {/* <p className="mb-5 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              necessitatibus adipisci quod quae voluptas libero sit accusantium
              voluptatum eligendi fugit iure recusandae, explicabo delectus
              veritatis eum? Neque atque ea laboriosam.
            </p> */}
            <div className="flex justify-center">
              <a href={""}>
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;