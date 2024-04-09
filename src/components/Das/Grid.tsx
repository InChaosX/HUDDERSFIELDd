'use client'
import React from 'react'
import { Link } from 'react-scroll';
import { T, useTranslate } from "@tolgee/react";

function Grid() {
  const { t } = useTranslate();
  return (
    <section>
      <div className="mx-auto max-w-screen-1xl px-4 py-16 sm:px-6 lg:px-40 z-99 mnb md:-mb-0 -mb-28">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2  ">
          <div className="lg:hidden py-[5rem]">
            {" "}
            {/* Hide this column on larger screens */}
            <div className="relative h-[500px] sm:h-80">
              <img
                alt=""
                src="/portrait-satisfied.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-white md:shadow-xl shadow-none">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 bg-[#F7F809]"></span>

            <div className="">
              <div className="md:h-[20rem] h-[45rem] rounded-lg white md:-mb-0 -mb-10  ">
                <div className="lg:max-w-lg mt-0 md:ml-16 ml-4">
                  <h1 className="md:text-2xl text-xl font-semibold tracking-wide text-gray-800   ">
                    {/* Les Avantages du Programme ? */}
                    {t("2ts")}
                  </h1>

                  <div className="mt-2 space-y-8">
                    <p className="flex items-center -mx-2  text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 mx-2 text-[#245EC5]"
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
                        {/* Économisez jusqu'à 310 000 MAD sur les frais de
                        scolarité par rapport à des études au Royaume-Uni. */}
                        {t("2ts1")}
                      </span>
                    </p>

                    <p className="flex items-center -mx-2 text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 mx-2 text-[#245EC5]"
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
                        {/* Étudiez une voie spécialisée garantissant une éducation
                        demandée par le marché du travail. */}
                        {t("2ts2")}
                      </span>
                    </p>

                    <p className="flex items-center -mx-2 text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 mx-2 text-[#245EC5]"
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
                        {/* Préparez au mieux vos compétences académiques et
                            linguistiques en anglais pour réussir à l'université. */}
                        {t("2ts3")}
                      </span>
                    </p>

                    <p className="flex items-center -mx-2 text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 mx-2 text-[#245EC5]"
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
                        {/* Terminez vos études avec un diplôme complet de licence
                        (avec mention) de l'Université de Huddersfield. */}
                        {t("2ts4")}
                      </span>
                    </p>
                    <p className="flex items-center -mx-2 text-black ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11 mx-2 text-[#245EC5]"
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
                        {/* Accélérez votre carrière avec un visa de travail
                        post-études de 2 ans au Royaume-Uni après l'obtention de
                        votre diplôme. */}
                        {t("2ts5")}
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
                        className=" block rounded-lg bg-[#245EC5] px-5 py-3 text-sm w-full   font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
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

          {/* //part 2 */}
          <div className="hidden lg:block lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="/portrait-satisfied.jpg"
                className="absolute inset-0 h-[100%] w-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grid;