"use client";
import React from "react";
import { T, useTranslate } from "@tolgee/react";

function Section2() {
  const { t } = useTranslate();
  return (
    <div className="bg-transparent  hero ">
      <section className="relative lg:min-h-[100px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-3 lg:px-2 relative z-20 mt-0 ">
          <div className="max-w-5xl mx-auto text-center ">
            
            <div className="pt-20 md:text-left space-y-4 text-center  ">
              <h1 className="md:text-4xl text-2xl  font-bold  mb-3 backdrop-blur-xl">
                <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-300">
                  {" "}
                  <span className="!text-white ">1 -</span>{" "}
                  {t("-Démarrez vos études universitaires à Casablanca")}
                </span>
              </h1>
              <h1 className="md:text-4xl text-2xl  font-bold  mb-3 backdrop-blur-xl">
                <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-300 ">
                  {" "}
                  <span className="!text-white ">2 -</span>{" "}
                  {t("-Obtenez un Bachelor en Business en Angleterre")}
                </span>
              </h1>
              <h1 className="md:text-4xl text-2xl  font-bold  mb-3 backdrop-blur-xl">
                <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-300">
                  <span className="!text-white ">3 -</span>{" "}
                  {t("-Décrochez votre 1er JOB en Angleterre")}
                </span>
              </h1>
            </div>

      
            <a
              href="#"
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-[#003976]  rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              {t("Inscrivez-vous maintenant")}
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>

            <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0"
                  width="31"
                  height="25"
                  viewBox="0 0 31 25"
                  fill="none"
                  stroke="#FDE047"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z"
                    stroke="#FDE047"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z"
                    stroke="#FDE047"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.2231 15.8512H7.11157C3.73595 15.8512 1 18.5871 1 21.9628V22.9814C1 22.9814 4.18311 24 10.1674 24C16.1516 24 19.3347 22.9814 19.3347 22.9814V21.9628C19.3347 18.5871 16.5988 15.8512 13.2231 15.8512Z"
                    fill="#0B1715"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.07422 6.68386C5.07422 3.87152 7.35485 1.59088 10.1672 1.59088C12.9795 1.59088 15.2602 3.87152 15.2602 6.68386C15.2602 9.4962 12.9795 12.7954 10.1672 12.7954C7.35485 12.7954 5.07422 9.4962 5.07422 6.68386Z"
                    fill="#0B1715"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="ml-3 text-sm text-white">
                  4,500 international students
                </p>
              </div>

              <div className="flex items-center">
                <svg
                  width="20px"
                  height="24px"
                  viewBox="0 0 16 16"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                 
                  className="si-glyph si-glyph-global"
                >
                

                  <defs></defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="#FDE047"
                    fill-rule="evenodd"
                  >
                    <g fill="#FDE047">
                      <path
                        d="M8.048,0 C3.63045083,0 0.048,3.582 0.048,8 C0.048,12.418 3.63045083,16 8.048,16 C12.4665577,16 16.048,12.418 16.048,8 C16.048,3.582 12.4665577,0 8.048,0 L8.048,0 Z M8,15 C4.13533409,15 1,11.8671467 1,8 C1,4.13384159 4.13533409,1 8,1 C11.8646659,1 15,4.13384159 15,8 C15,11.868135 11.8646659,15 8,15 L8,15 Z"
                        className="si-glyph-fill"
                      ></path>
                      <path
                        d="M2.959,2.684 C2.689,4.028 3.694,6.083 5.831,6.583 C7.967,7.083 7.049,6.667 6.717,6 C6.383,5.333 6.682,4.833 7.199,4.667 C7.717,4.5 7.586,4.96 8.354,4 C8.548,2 6.882,3.973 6.716,3.14 C8.366,1.223 5.95,0.5 5.249,0.75 C4.548,1 3.229,1.339 2.959,2.684 L2.959,2.684 Z"
                        className="si-glyph-fill"
                      ></path>
                      <path
                        d="M6.873,7.694 C6.749,7.749 6.171,8.11 5.972,8.36 C5.773,8.61 5.686,9.138 5.972,9.36 C6.258,9.583 5.956,10.639 6.727,10.833 C7.498,11.027 8.27,11.14 8.299,11.75 C8.326,12.36 8.227,13.777 7.856,13.917 C8.356,14.194 9.573,12.722 10.001,11.944 C10.43,11.167 10.573,10.055 10.544,9.777 C10.515,9.5 10.715,8.917 10.801,8.167 C10.886,7.417 10.231,7.367 10.146,7.034 C10.059,6.7 9.943,6.333 6.873,7.694 L6.873,7.694 Z"
                        className="si-glyph-fill"
                      ></path>
                      <path
                        d="M13.125,4 C13.125,4 11.113,4.861 12.481,6.14 C13.847,7.417 14.543,8.63 14.476,8.908 C14.414,9.184 13.096,10.614 13.853,10.502 C14.614,10.391 15.175,8.891 15.296,8.001 C15.415,7.111 14.372,5.362 14.329,5.224 C14.293,5.083 13.607,4.015 13.125,4 L13.125,4 Z"
                        className="si-glyph-fill"
                      ></path>
                    </g>
                  </g>
                </svg>
                <p className="ml-3 text-sm text-white">100 nationalities</p>
              </div>

              <div className="flex items-center">
             
                <svg
                  width="20px"
                  height="24px"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                 
                  aria-hidden="true"
                  role="img"
                  
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                    fill="#fdd835"
                  ></path>
                  <path
                    d="M67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                    fill="#ffff8d"
                  ></path>
                  <path
                    d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                    fill="#f4b400"
                  ></path>
                </svg>
                <p className="ml-3 text-sm text-white">Rated 5 stars with QS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
