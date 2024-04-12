"use client";
import React, { useEffect } from "react";

import { T, useTranslate } from "@tolgee/react";
import { Link } from "react-scroll";

 import AOS from "aos";
 import "aos/dist/aos.css";


function Heroo() {

  // You can also use <link> for styles
// ..

// import  {fadeIn} from '../components/variants'

 
  useEffect(()=>{
   AOS.init({
     // Global settings:
     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
     startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
     initClassName: "aos-init", // class applied after initialization
     animatedClassName: "aos-animate", // class applied on animation
     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
     offset: 120, // offset (in px) from the original trigger point
     delay: 0, // values from 0 to 3000, with step 50ms
     duration: 400, // values from 0 to 3000, with step 50ms
     easing: "ease", // default easing for AOS animations
     once: false, // whether animation should happen only once - while scrolling down
     mirror: false, // whether elements should animate out while scrolling past them
     anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
   });
  },[]);



  const { t } = useTranslate();
  return (
    <div className="md:-mb-20 -mb-0 bg-[#245EC5] ht">
      <div className="mx-auto h-full px-4 py-8  sm:max-w-xl md:max-w-full md:px-24 md:py-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
          <div className="">
            <div className="lg:max-w-xl lg:pr-5">
              <h2
                className="mb-6 max-w-lg text-1xl font-semibold leading-snug tracking-wide  text-white sm:text-2xl"
                // data-aos="slide-down"
                // data-aos-offset="200"
                // data-aos-delay="50"
                // data-aos-duration="800"
                // data-aos-easing="ease-in-out"
                // data-aos-anchor-placement="center"
                // data-aos-once="false"
              >
                <div
                  data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-anchor-placement="center"
                  data-aos-once="false"
                >
                  {" "}
                  {t("-Démarrez vos études universitaires à Casablanca")}
                </div>
                <br />

                <div
                  data-aos="slide-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-anchor-placement="center"
                  data-aos-once="false"
                >
                  {" "}
                  {t("-Obtenez un Bachelor en Business en Angleterre")}
                </div>
                <br />

                <div
                  data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-anchor-placement="center"
                  data-aos-once="false"
                >
                  {t("-Décrochez votre 1er JOB en Angleterre")}
                </div>
              </h2>
              <p
                data-aos="slide-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="center"
                data-aos-once="false"
                className="text-base text-gray-300 font-bold"
              >
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
                <div
                  data-aos="fade-right"
                  // data-aos-offset="200"
                  // data-aos-delay="50"
                  // data-aos-duration="800"
                  // data-aos-easing="ease-in-out"
                  data-aos-anchor-placement="bottom"
                  // data-aos-once="false"
                  className="md:mb-0 mb-7 inline-flex h-12 w-full cursor-pointer items-center justify-center rounded bg-[#F7F809] px-6 font-medium tracking-wide text-black shadow-md transition duration-200 md:mr-4  md:w-auto focus:outline-none hover:bg-white"
                >
                  {t("Inscrivez-vous maintenant")}
                </div>
              </Link>
            </div>
          </div>
          <div className="relative  lg:ml-32  md:w-1/3 lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-[#245EC5] p-2 lg:hidden"
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

            <div
              
              className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none bg-[#79a7f5] md:-mt-0 -mt-14 md:mb-0 mb-10 "
            >
              <svg
                data-aos="flip-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="center"
                data-aos-once="false"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute md:-left-2 -left-0 top-16  md:-top-20 h-28 w-28 rounded-xl bg-transparent text-white"
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
                data-aos="flip-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="center"
                data-aos-once="false"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 md:-bottom-20 -bottom-10 h-28 w-28 rounded-xl bg-transparent text-yellow-300 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <img
                data-aos="flip-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="center"
                data-aos-once="false"
                className=""
                src="/Hero.png"
                alt=""
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Heroo;
