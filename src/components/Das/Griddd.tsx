'use client'
import React from 'react'
import { Link } from 'react-scroll';
import { T, useTranslate } from "@tolgee/react";

function Griddd() {
   const { t } = useTranslate();
  return (
    <section>
      <div className="mx-auto max-w-screen-1xl px-4 py-28 sm:px-6 lg:px-40 z-99 md:-mb-0 -mb-20">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative flex items-center  shadow-xl h-[700px] md:mb-0 mb-8">
            {/* <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 bg-[#F7F809] my-7 shadow-xl "></span> */}

            <div className="bg-white md:h-[700px] h-[600px] ">
              <div
                className="md:h-[20rem] h-[35rem]  rounded-lg white  "
                // data-aos="flip-up"
              >
                <div className="lg:max-w-lg mt-0 md:ml-16 ml-5 ">
                  <h1
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="center"
                    data-aos-once="false"
                    className="md:text-2xl text-xl font-semibold tracking-wide text-gray-800 mt-9 mb-9  "
                  >
                    {t("2ts")}
                  </h1>

                  <div className=" md:text-1xl text-sm space-y-10 mt-4">
                    <h1
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="800"
                      data-aos-easing="ease-in-out"
                      data-aos-anchor-placement="center"
                      data-aos-once="false"
                      className="flex items-center -mx-2  text-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-9 h-9 md:w-11 md:h-11   mx-2 text-[#245EC5]"
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

                      <span className="mx-2"> {t("2ts1")}</span>
                    </h1>

                    <h1
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="800"
                      data-aos-easing="ease-in-out"
                      data-aos-anchor-placement="center"
                      data-aos-once="false"
                      className="flex items-center -mx-2 text-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-9 h-9 md:w-11 md:h-11   mx-2 text-[#245EC5]"
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

                      <span className="mx-2"> {t("2ts2")}</span>
                    </h1>

                    <p
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="800"
                      data-aos-easing="ease-in-out"
                      data-aos-anchor-placement="center"
                      data-aos-once="false"
                      className="flex items-center -mx-2 text-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-9 h-9 md:w-11 md:h-11   mx-2 text-[#245EC5]"
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

                      <span className="mx-2"> {t("2ts3")}</span>
                    </p>

                    <p
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="800"
                      data-aos-easing="ease-in-out"
                      data-aos-anchor-placement="center"
                      data-aos-once="false"
                      className="flex items-center -mx-2 text-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-9 h-9 md:w-11 md:h-11   mx-2 text-[#245EC5]"
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

                      <span className="mx-2"> {t("2ts4")}</span>
                    </p>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="800"
                      data-aos-easing="ease-in-out"
                      data-aos-anchor-placement="center"
                      data-aos-once="false"
                      className="flex items-center -mx-2 text-black "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-9 h-9 md:w-11 md:h-11   mx-2 text-[#245EC5]"
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

                      <span className="mx-2"> {t("2ts5")}</span>
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
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="800"
                        data-aos-easing="ease-in-out"
                        data-aos-anchor-placement="center"
                        data-aos-once="false"
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

          <div className="relative z-10 bg-white mb-56 md:mb-0">
            <div
              data-aos="flip-up"
              className="relative h-64 sm:h-80 lg:h-full md:mb-0 mb-9"
            >
              <img
                alt=""
                src="/hudeimage-350.jpg"
                className=" md:h-[700px] md:w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Griddd;