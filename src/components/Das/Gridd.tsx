'use client'
import React from 'react'
import { Link } from 'react-scroll';
import { T, useTranslate } from "@tolgee/react";

function Gridd() {
   const { t } = useTranslate();
  return (
    <section>
      <div className="mx-auto max-w-screen-1xl px-4 py-28 sm:px-6 lg:px-40 z-99 md:-mb-0 -mb-36">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 bg-yellow-300 mb-56 md:mb-0">
            <div className="relative h-64 sm:h-80 lg:h-full md:mb-0 mb-9">
              <img
                alt=""
                src="/huddersfield-image.jpeg"
                className="absolute inset-0 md:h-[700px] md:w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center  shadow-xl py-10 md:mb-0 mb-8">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 bg-[#F7F809] my-7 shadow-xl "></span>

            <div className="bg-white">
              <div className="md:h-[20rem] h-[35rem]  rounded-lg white md:-mb-0 -mb-10  ">
                <div className="lg:max-w-lg mt-0 md:ml-16 ml-4">
                  <h1 className="md:text-2xl text-xl font-semibold tracking-wide text-gray-800   ">
                    {t(
                      "ts"
                    )}
                  </h1>

                  <div className="mt-2 space-y-4">
                    <p className="flex items-center -mx-2  text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-[#245EC5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="md:mx-2 mx-0">
                        {t(
                          "ts1"
                        )}
                      </span>
                    </p>

                    <p className="flex items-center -mx-2 text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-[#245EC5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="mx-2">
                        {t("ts2")}
                      </span>
                    </p>

                    <p className="flex items-center -mx-2 text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-[#245EC5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="mx-2">
                        {t("ts3")}
                      </span>
                    </p>

                    <p className="flex items-center -mx-2 text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-[#245EC5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="mx-2">
                        {t("ts4")}
                      </span>
                    </p>
                    <p className="flex items-center -mx-2 text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-[#245EC5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="mx-2">
                        {t("ts5")}
                      </span>
                    </p>
                    <p className="flex items-center -mx-2 text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-[#245EC5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="mx-2">
                        {" "}
                        {t("ts6")}
                      </span>
                    </p>
                    <p className="flex items-center -mx-2 text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-[#245EC5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="mx-2">
                        {t("ts7")}
                      </span>
                    </p>
                    <p className="flex items-center -mx-2 text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-[#245EC5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="mx-2">
                        {t("ts8")}
                      </span>
                    </p>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={800}
                      // ignoreCancelEvents={true}
                    >
                      <button
                        className=" mt-5  block rounded-lg bg-[#245EC5] px-5 py-3 text-sm w-full  font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                        type="button"
                      >
    
                        {t("Inscrivez-vous maintenant")}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gridd;