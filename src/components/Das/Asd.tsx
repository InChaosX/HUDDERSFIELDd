"use client"
import React from 'react'
import { T, useTranslate } from "@tolgee/react";

function Asd() {
  const { t } = useTranslate();
  return (
    <section className="bg-white md:px-96 px-4 py-32 -mb-28 md:-mb-0 ">
      <div className="space-y-8 relative before:absolute  before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#F7F809] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              fill="#fff"
              className="text-indigo-500 w-20 h-20 "
              viewBox="0 0 256 256"
              id="Flat"
            >
              <path d="M128,20A108,108,0,1,0,236,128,108.12186,108.12186,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09562,84.09562,0,0,1,128,212ZM144,84v92a12,12,0,0,1-24,0V106.417l-5.3457,3.5625a12.00027,12.00027,0,1,1-13.3086-19.97265l24-15.99317A12.00071,12.00071,0,0,1,144,84Z" />
            </svg>
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-[#245EC5] shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                {/* Pré-Universitaire */}
                {t("timec1")}
              </div>
              {/* <time className="font-caveat font-medium text-indigo-500">
                08/06/2023
              </time> */}
            </div>
            <div className="text-slate-500">
              {/* Année de Fondation Internationale */}
              {t("timec11")}
            </div>
            <img className="h-auto max-w-44" src="/NCUK-LOGO.png" />
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#F7F809] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            {/* <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg> */}
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

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-[#245EC5] shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                {/* Stage 1 */}
                {t("timec2")}
              </div>
              {/* <time className="font-caveat font-medium text-indigo-500">
                09/06/2023
              </time> */}
            </div>

            <div className="text-slate-500">
              {/* Première Année Internationale */}
              {t("timec22")}
            </div>
            <img className="h-auto max-w-44" src="/NCUK-LOGO.png" />
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#F7F809] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
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

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-[#245EC5] shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                {/* Stage 2 */}
                {t("timec3")}
              </div>
              {/* <time className="font-caveat font-medium text-indigo-500">
                10/06/2023
              </time> */}
            </div>

            <div className="text-slate-500">
              {/* Deuxième Année internationale */}
              {t("timec33")}
            </div>
            <img className="h-auto max-w-44" src="/NCUK-LOGO.png" />
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#F7F809] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
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

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-[#245EC5] shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                {/* Stage 3 */}
                {t("timec4")}
              </div>
              {/* <time className="font-caveat font-medium text-indigo-500">
                12/06/2023
              </time> */}
            </div>

            <div className="text-slate-500">
              {/* Diplôme de Dernière Année */}
              {t("timec44")}
            </div>
            <img className="h-auto max-w-44" src="/huddersfield-logo.png" />
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#F7F809] group-[.is-active]:bg-[#F7F809] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              fill="#fff"
              //   width="800px"
              //   height="800px"
              className="text-indigo-500 w-20 h-20 "
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M128,20A108,108,0,1,0,236,128,108.12186,108.12186,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09562,84.09562,0,0,1,128,212ZM122.042,96l-2.64062,16.24707a40.83,40.83,0,0,1,4.48047-.24512,39.99911,39.99911,0,1,1-28.34961,68.29883,11.99943,11.99943,0,1,1,16.93554-17.0039,16.202,16.202,0,0,0,22.82911-.001,15.91674,15.91674,0,0,0,0-22.5918,16.2044,16.2044,0,0,0-22.82911.001,12.00041,12.00041,0,0,1-20.3125-10.42774l7.835-48.20214A12,12,0,0,1,111.835,72H152a12,12,0,0,1,0,24Z" />
            </svg>
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-[#245EC5] shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                {/* DIPLÔMÉ */}
                {t("timec5")}
              </div>
              {/* <time className="font-caveat font-medium text-amber-500">
                Exp. 12/08/2023
              </time> */}
            </div>
            <div className="text-slate-500">
              <img className="h-auto max-w-44" src="/huddersfield-logo.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Asd;