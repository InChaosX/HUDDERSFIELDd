"use client";
import React from "react";

import { T, useTranslate } from "@tolgee/react";
import { Link } from "react-scroll";

function Heroo() {
  const { t } = useTranslate();
  return (
    <div className="md:-mb-20 -mb-0">
      <div className="mx-auto h-full px-4 py-8  sm:max-w-xl md:max-w-full md:px-24 md:py-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="">
            <div className="lg:max-w-xl lg:pr-5">
              <h2 className="mb-6 max-w-lg text-1xl font-semibold leading-snug tracking-wide  text-blue-600 sm:text-2xl">
                {t("-Démarrez vos études universitaires à Casablanca")}
                <br />
                <br />
                {t("-Obtenez un Bachelor en Business en Angleterre")}
                <br />
                <br />
                {t("-Décrochez votre 1er JOB en Angleterre")}
              </h2>
              <p className="text-base text-gray-700">
                {/* START IN CASABLANCA and get to the FINAL YEAR at the University
                of Huddersfield IN THE UK ! */}
                {t("topHerotitle")}
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center md:flex-row">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                // ignoreCancelEvents={true}
              >
                <div className="md:mb-0 mb-7 inline-flex h-12 w-full cursor-pointer items-center justify-center rounded bg-[#F7F809] px-6 font-medium tracking-wide text-black shadow-md transition duration-200 md:mr-4  md:w-auto focus:outline-none hover:bg-blue-800">
                  {t("Inscrivez-vous maintenant")}
                </div>
              </Link>
             
            </div>
           
          </div>
          <div className="relative  lg:ml-32  md:w-1/3 lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
            <div className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none bg-[#F7F809]">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute md:-left-2 -left-0 top-16  md:-top-20 h-28 w-28 rounded-xl bg-white text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clip-rule="evenodd"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl bg-white text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <img className="" src="/Hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroo;
