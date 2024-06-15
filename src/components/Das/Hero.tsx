"use client";
import React from "react";
import { T, useTranslate } from "@tolgee/react";
import { useState } from "react";
import VideoModal from "./VideoModal";
import { Link } from "react-scroll";

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
              <h1
                data-aos="fade-up"
                data-aos-duration="2000"
                className="md:text-4xl text-2xl font-bold text-black sm:text-6xl lg:text-4xl "
              >
                {t("dream")} <br />
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#003976] "></span>
                  <h1 className="relative text-4xl font-bold text-white sm:text-6xl lg:text-6xl">
                    {t("dream2")}
                  </h1>
                </div>
              </h1>

              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-8 text-base text-black sm:text-2xl "
              >
                {/* Apply to the NCUK International Foundation Year program at
                LONDON ACADEMY CASABLANCA */}
                {t("tb")}
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  // ignoreCancelEvents={true}
                >
                  <button
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-[#003976] rounded-lg hover:bg-[#003976] hover:text-white transition-all duration-200 bg-white"
                    role="button"
                  >
                    {t("Inscrivez-vous maintenant")}
                  </button>
                </Link>
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
                    {/* Watch video */}
                    {t("Regarder la vidéo")}
                  </p>
                </a>
                <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} />
              </div>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="w-full h-[70vh] bg-white  "
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
