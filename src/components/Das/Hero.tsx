"use client";
import React from "react";
import { T, useTranslate } from "@tolgee/react";
import { useState } from "react";
import VideoModal from "./VideoModal";

function Hero() {
  const { t } = useTranslate();

   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
     setIsModalOpen(true);
   };

   const handleCloseModal = () => {
     setIsModalOpen(false);
   };


  return (
    <div className="bg-gradient-to-b from-[#cad7e4]  to-[#659bd5] -mt-10 ">
      <section className="py-10 sm:py-16 lg:py-24 mt-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              {/* <div className="pt-10">
                <h1 className="md:text-4xl text-sm font-bold sm:text-3xl mb-3 backdrop-blur-xl">
                  <span className="text-white">
                    {" "}
                    {t("-Démarrez vos études universitaires à Casablanca")}
                  </span>
                </h1>
                <h1 className="md:text-4xl text-sm font-bold sm:text-3xl mb-3 backdrop-blur-xl">
                  <span className="text-white ">
                    {" "}
                    {t("-Obtenez un Bachelor en Business en Angleterre")}
                  </span>
                </h1>
                <h1 className="md:text-4xl text-sm font-bold sm:text-3xl mb-3 backdrop-blur-xl">
                  <span className="text-white">
                    {" "}
                    {t("-Décrochez votre 1er JOB en Angleterre")}
                  </span>
                </h1>
              </div> */}
              <h1
                data-aos="fade-up"
                data-aos-duration="2000"
                className="md:text-4xl text-2xl font-bold text-black sm:text-6xl lg:text-4xl "
              >
                Votre rêve devient réalité… Vivez l’expérience britannique et
                faites vos études
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-yellow-300 "></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-6xl">
                    à Huddersfield !
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-2xl ">
                Apply to the NCUK International Foundation Year program at
                LONDON ACADEMY CASABLANCA
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  title=""
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-yellow-300  hover:bg-blue-700 focus:bg-orange-600"
                  role="button"
                >
                  {" "}
                  Start exploring{" "}
                </a>
                <a
                  // href="#"
                  title=""
                  className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80 cursor-pointer"
                  onClick={handleOpenModal}
                >
                  <svg
                    className="w-10 h-10 mr-3 "
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#000000"
                  >
                    <path
                      fill="#FFF"
                      stroke="#FFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p data-aos="fade-up" data-aos-duration="2000" className="">
                    Watch video
                  </p>
                </a>
                <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} />
              </div>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="w-full h-[70vh]   bg-yellow-300  "
            >
              <img
                className="w-full h-[70vh]  object-cover  shadow-2xl shadow-gray-500  p-5 mr-6 "
                src="hud_imghero.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
