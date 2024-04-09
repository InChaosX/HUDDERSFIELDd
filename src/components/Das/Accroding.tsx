"use client"
import React from 'react'
import { T, useTranslate } from "@tolgee/react";

function Accroding() {
   const { t } = useTranslate();
  return (
    <section className="md:px-40 px-10 bg-[#245EC5]  py-32  str ">
      <header className="text-center pb-10">
        <h2 className="text-xl font-bold text-white sm:text-3xl">
          {/* Exigences d'admission */}
          {t("acc0")}
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-white">
          {/* Développez vos compétences académiques et linguistiques à Casablanca
          avec NCUK, puis libérez tout votre potentiel avec la dernière année du
          diplôme en commerce de votre choix à l’Université de Huddersfield. */}
          {t("acc1")}
        </p>
      </header>
      <div className="space-y-4">
        <details
          className="group border-s-4 border-[#F7F809]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-center gap-1.5">
            <h2 className="text-lg font-bold text-gray-900">
              {/* BAC marocain, IELTS 5.0 ou équivalent = Accès à l'Année de
              Fondation Internationale. */}
              {t("acc2")}
            </h2>

            {/* <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span> */}
          </summary>
        </details>

        <details className="group border-s-4 border-[#F7F809]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-center gap-1.5">
            <h2 className="text-lg font-bold text-gray-900">
              {/* BAC français, IELTS 5.5 ou équivalent = Accès à l'International
              Year One. */}
              {t("acc3")}
            </h2>
          </summary>
        </details>

        <details className="group border-s-4 border-[#F7F809]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-center gap-1.5">
            <h2 className="text-lg font-bold text-gray-900 text-center">
              {/* L'admission à l'International Year Two nécessite la réussite de
              l'International Year One. D'autres qualifications de niveau 4 FHEQ
              peuvent également être utilisées pour l'admission au cas par cas. */}
              {t("acc4")}
            </h2>
          </summary>
        </details>

        <details className="group border-s-4 border-[#F7F809]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-center gap-1.5">
            <h2 className="text-lg font-bold text-gray-900">
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