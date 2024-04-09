'use client'
import React from 'react'
import { Link } from 'react-scroll';
import { T, useTranslate } from "@tolgee/react";

function Test() {
  const { t } = useTranslate();
  return (
    <section className=" w-full  imf mnb md:-mb-0 -mb-20">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">
          {/* Cheminement abordable vers un diplôme britannique. */}
          {t("test0")}
        </h1>
        <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-white">
          {/* Développez vos compétences académiques et linguistiques à Casablanca
          avec NCUK, puis libérez tout votre potentiel avec la dernière année de
          votre diplôme en commerce choisi à l’Université de Huddersfield. */}
          {t("test1")}
        </p>

        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            // ignoreCancelEvents={true}
          >
            <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-blue-gray-400 text-black rounded-lg border border-gray-300 bg-[#F7F809] focus:ring-4 focus:ring-gray-100  dark:focus:ring-gray-800">
              {t("Inscrivez-vous maintenant")}
              <svg
                fill="#000000"
                //   height="800px"
                //   width="800px"
                className="ml-3 h-5 w-5"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                //   xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                //   xml:space="preserve"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333
				c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333
				z"
                      />
                      <path
                        d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17
				l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17
				C369.42,189.917,355.913,189.917,347.582,198.248z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Test;