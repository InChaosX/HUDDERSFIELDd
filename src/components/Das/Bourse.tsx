'use client'
import React, { useEffect } from 'react'

import { T, useTranslate } from "@tolgee/react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles


// useEffect(() => {
//   AOS.init({
//     duration: 400, // values from 0 to 3000, with step 50ms
//     easing: "ease",
//   });
// }, []);

function Bourse() {
  useEffect(() => {
    AOS.init({
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease",
    });
  }, []);
   const { t } = useTranslate();
  return (
    <section className="bg-gray-50 mt-10 md:-mb-0 -mb-10">
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex  lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="text-3xl font-extrabold sm:text-5xl text-[#245EC5]"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            data-aos-anchor-placement="center"
          >
            {t("bourse")}
          </h1>

          <p
            className="mt-4 sm:text-xl/relaxed"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            data-aos-anchor-placement="center"
          >
            {t("tb")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bourse;