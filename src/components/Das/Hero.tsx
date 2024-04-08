'use client'
import React from 'react'
// import { GetStaticPropsContext } from "next";
import { T, useTranslate } from "@tolgee/react";
import { Link } from 'react-scroll';

function Hero() {
   const { t } = useTranslate();
    
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat md:h-[400px] h-[300px]  bg-white/95 mnb md:-mb-30 -mb-20 "
      style={{
        backgroundImage: 'url("/HUDDRS-HERO-h.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(100%)", // Adjust brightness here
        transition: "filter 0.3s",
      }}
    >
      <div className="absolute inset-0 bg-blue-400/50   sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative  px-4  sm:px-6 lg:flex lg:items-center lg:px-8  ">
        <div className="mx-auto md:max-w-4xl max-w-sm font-[40px] text-center pt-10 mt-10">
          <h1 className=" bg-white bg-clip-text text-1xl font-extrabold text-transparent sm:text-3xl ">
            {/* bg-gradient-to-r from-white via-blue-500 to-yellow-300 */}
            {/* Understand User Flow. */}
            <span className="block ">
             
             
              {t("-Démarrez vos études universitaires à Casablanca")}
              
            </span>
            <span className="block">
             {t("-Obtenez un Bachelor en Business en Angleterre")} 
            </span>
            <span className="block  ">
            {t("-Décrochez votre 1er JOB en Angleterre")}   
            </span>
          </h1>

          {/* <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p> */}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            // ignoreCancelEvents={true}
          >
            <button
              className=" mt-10 md:w-[400px] w-[300px] rounded-lg bg-[#F7F809] px-5 py-3 text-sm font-medium text-black transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              Inscrivez-vous maintenantt
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// export async function getStaticProps({ locale }: GetStaticPropsContext) {
//   return {
//     props: {
//       messages: (await import(`../../messages/${locale}.json`)).default,
//       //   ./../messages/${locale}.json
//     },
//   };
// }