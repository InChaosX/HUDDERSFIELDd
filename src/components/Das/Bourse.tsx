'use client'
import React from 'react'

import { T, useTranslate } from "@tolgee/react";

function Bourse() {
   const { t } = useTranslate();
  return (
    <section className="bg-gray-50 mt-10 md:-mb-0 -mb-10">
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex  lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-[#245EC5]">
            {t("bourse")}
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
           {t("tb")}
          </p>

        </div>
      </div>
    </section>
  );
}

export default Bourse;