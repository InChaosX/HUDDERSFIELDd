"use client"
import React from 'react'
import { T, useTranslate } from "@tolgee/react";

function Accroding() {
   const { t } = useTranslate();
  return (
    <section
      className="md:px-40 px-10 bg-[#003976] py-32 str overflow-hidden "
      data-aos="slide-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="center"
    >
      <header
        className="text-center pb-10"
        data-aos="slide-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center"
      >
        <h2 className="text-xl font-bold text-white sm:text-3xl">
          {/* Exigences d'admission */}
          {t("acc0")}
        </h2>

        <p
          className="mx-auto mt-4 max-w-xl text-white"
          data-aos="slide-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="center"
        >
          {/* Développez vos compétences académiques et linguistiques à Casablanca
          avec NCUK, puis libérez tout votre potentiel avec la dernière année du
          diplôme en commerce de votre choix à l’Université de Huddersfield. */}
          {t("acc1")}
        </p>
      </header>
      <div className="space-y-4">
        <details
          className="group border-s-4 border-[#7178d8]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="center"
        >
          <summary
            className="flex cursor-pointer items-center justify-center gap-1.5"
            // 
          >
            <h2 className="md:text-lg tex-md font-bold text-gray-900">
              {/* BAC marocain, IELTS 5.0 ou équivalent = Accès à l'Année de
              Fondation Internationale. */}
              {t("acc2")}
            </h2>
          </summary>
        </details>

        <details
          className="group border-s-4 border-[#7178d8]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="center"
        >
          <summary
            className="flex cursor-pointer items-center justify-center gap-1.5"
            // data-aos="slide-down"
            // data-aos-offset="200"
            // data-aos-delay="50"
            // data-aos-duration="800"
            // data-aos-easing="ease-in-out"
            // data-aos-anchor-placement="center"
          >
            <h2 className="md:text-lg tex-md  font-bold text-gray-900">
              {/* BAC français, IELTS 5.5 ou équivalent = Accès à l'International
              Year One. */}
              {t("acc3")}
            </h2>
          </summary>
        </details>

        <details
          className="group border-s-4 border-[#7178d8] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="center"
        >
          <summary
            className="flex cursor-pointer items-center justify-center gap-1.5"
            // data-aos="slide-left"
            // data-aos-offset="200"
            // data-aos-delay="50"
            // data-aos-duration="800"
            // data-aos-easing="ease-in-out"
            // data-aos-anchor-placement="center"
          >
            <h2 className="md:text-lg tex-md  font-bold text-gray-900 text-center">
              {/* L'admission à l'International Year Two nécessite la réussite de
              l'International Year One. D'autres qualifications de niveau 4 FHEQ
              peuvent également être utilisées pour l'admission au cas par cas. */}
              {t("acc4")}
            </h2>
          </summary>
        </details>

        <details
          className="group border-s-4 border-[#7178d8]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="center"
        >
          <summary
            className="flex cursor-pointer items-center justify-center gap-1.5"
            // da
            data-aos-anchor-placement="center"
          >
            <h2 className="md:text-lg tex-md  font-bold text-gray-900">
              {/* L'accès à la dernière année du diplôme à l'Université de
              Huddersfield nécessite la réussite de l'International Year Two. */}
              {t("acc5")}
            </h2>
          </summary>
        </details>
      </div>
    </section>
  );
}

export default Accroding;