"use client";

import React from "react";
import { T, useTranslate } from "@tolgee/react";

function V_timeline() {
  const { t } = useTranslate();
  return (
    <section
      className="bg-[#003976] py-16 sm:py-16 lg:py-20 xl:py-24  -mt-24  ghy md:-mb-0 -mb-20 "
      data-aos="slide-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="200"
      data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      // data-aos-once="false"
      data-aos-anchor-placement="center"
    >
      <div className=" w-full ">
        <div className="text-center">
          <h2
            className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl md:pt-0 pt-20"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            data-aos-anchor-placement="center"
          >
            {/* Étapes vers le Succès */}
            {t("vtt")}
          </h2>
        </div>
        <ul className=" md:pl-24 pl-2 mt-12 grid w-full grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:w-full lg:grid-cols-4 ">
          <li
            className="flex-start group relative flex lg:flex-col"
            data-aos="slide-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="200"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            data-aos-anchor-placement="center"
          >
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            ></span>
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-gray-500 bg-gray-500 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
              <svg
                fill="#fff"
                className="text-indigo-500 w-20 h-20 "
                viewBox="0 0 256 256"
                id="Flat"
              >
                <path d="M128,20A108,108,0,1,0,236,128,108.12186,108.12186,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09562,84.09562,0,0,1,128,212ZM144,84v92a12,12,0,0,1-24,0V106.417l-5.3457,3.5625a12.00027,12.00027,0,1,1-13.3086-19.97265l24-15.99317A12.00071,12.00071,0,0,1,144,84Z" />
              </svg>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-md font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                {/* Inscrivez-vous au programme NCUK International à LONDON ACADEMY
                CASABLANCA */}
                {t("vtp1")}
              </h3>
              {/* <h4 className="mt-2 text-base text-gray-700">
                Développez des compétences académiques solides dans le domaine
                de la gestion, et maîtrisez la langue anglaise
              </h4> */}
            </div>
          </li>
          <li
            className="flex-start group relative flex lg:flex-col"
            data-aos="slide-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="200"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            data-aos-anchor-placement="center"
          >
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            ></span>
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-gray-500 bg-gray-500 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
              <svg
                fill="#fff"
                //   width="800px"
                //   height="800px"
                className="text-indigo-500 w-20 h-20 "
                viewBox="0 0 256 256"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128,20A108,108,0,1,0,236,128,108.12186,108.12186,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09562,84.09562,0,0,1,128,212Zm29.50391-87.38477-29.51075,39.37891H152a12,12,0,0,1,0,24H104.39648c-.13281.00488-.26464.00684-.39843.00684a12.00272,12.00272,0,0,1-9.47168-19.36914l43.56543-58.13379a12.00426,12.00426,0,1,0-21.1543-11.165A11.9998,11.9998,0,0,1,94.834,89.9834a36.00408,36.00408,0,1,1,63.01172,34.15234C157.73535,124.29883,157.62207,124.458,157.50391,124.61523Z" />
              </svg>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-md font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                {/* Développez des compétences académiques solides dans le domaine
                de la gestion, et maîtrisez la langue anglaise */}
                {t("vtp2")}
              </h3>
              {/* <h4 className="mt-2 text-base text-gray-700">
                Développez des compétences académiques solides dans le domaine
                de la gestion, et maîtrisez la langue anglaise
              </h4> */}
            </div>
          </li>
          <li
            className="flex-start group relative flex lg:flex-col"
            data-aos="slide-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="200"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            data-aos-anchor-placement="center"
          >
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            ></span>
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-gray-300 bg-gray-500 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
              <svg
                fill="#fff"
                //   width="800px"
                //   height="800px"
                className="text-indigo-500 w-20 h-20 "
                viewBox="0 0 256 256"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128,20A108,108,0,1,0,236,128,108.12186,108.12186,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09562,84.09562,0,0,1,128,212Zm24.28809-88.2832a39.99987,39.99987,0,0,1-56.56934,56.56738,12.0001,12.0001,0,0,1,16.9707-16.9707A15.99967,15.99967,0,1,0,124.00293,136a11.99971,11.99971,0,0,1-9.832-18.87988l14.7832-21.12793h-24.957a12,12,0,0,1,0-24h48a11.99971,11.99971,0,0,1,9.832,18.87988l-18.32226,26.18457A40.17514,40.17514,0,0,1,152.28809,123.7168Z" />
              </svg>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-md font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                {/* Accédez directement à la dernière année de votre diplôme en
                commerce choisi à l'Université de Huddersfield */}
                {t("vtp3")}
              </h3>
              {/* <h4 className="mt-2 text-base text-gray-700">
                Choose a domain or a subdomain for your blog.
              </h4> */}
            </div>
          </li>
          <li
            className="flex-start group relative flex lg:flex-col"
            data-aos="slide-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="200"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            data-aos-anchor-placement="center"
          >
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-gray-300 bg-gray-500 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
              <svg
                fill="#fff"
                //   width="800px"
                //   height="800px"
                className="text-indigo-500 w-20 h-20 "
                viewBox="0 0 256 256"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128,20A108,108,0,1,0,236,128,108.12186,108.12186,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09562,84.09562,0,0,1,128,212Zm32-100v64a12,12,0,0,1-24,0V156H100a12.00068,12.00068,0,0,1-11.31641-15.99316l23.99805-68a12.00026,12.00026,0,1,1,22.63281,7.98632L116.96,132H136V112a12,12,0,0,1,24,0Z" />
              </svg>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-md font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                {/* Obtenez votre diplôme et lancez votre carrière en Angleterre */}
                {t("vtp4")}
              </h3>
              {/* <h4 className="mt-2 text-base text-gray-700">
                That's it. You will get back a professional blog.
              </h4> */}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default V_timeline;
