"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { LangSelector } from "../LangSelector";
import { Link } from "react-scroll";
import { T, useTranslate } from "@tolgee/react";
import Hud from "../icon/Hud";

function Header() {
  const { t } = useTranslate();

  return (
    // <section
    //   className="bg-[#003976] top-0 left-0 right-0 z-50 h-[100px] fixed"
    //   id="navbar"
    // >
    //   <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
    //     <div className="flex items-center justify-between">
    //       <div className="text-left md:text-center">
    //         <Hud />
    //       </div>

    //       <div className="flex items-center space-x-4">
    //         <button
    //           className="hidden md:inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring"
    //           type="button"
    //         >
    //           <LangSelector />
    //         </button>
    //       </div>
    //     </div>
    //     <div className="mt-4 sm:mt-0 flex flex-col items-center justify-center sm:flex-row sm:justify-end space-x-4">
    //       <div data-aos="fade-down" data-aos-duration="3000">
    //         <Link
    //           to="contact"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={800}
    //         >
    //           <button
    //             className="block rounded-lg bg-white border-4 border-blue-400 font-bold w-full px-5 py-3 text-sm text-[#245EC5] transition hover:bg-gray-300 focus:ring btn relative"
    //             id="scroll-button"
    //             type="button"
    //             data-aos="fade-down"
    //             data-aos-duration="3000"
    //           >
    //             {t("Inscrivez-vous maintenant")}
    //           </button>
    //         </Link>
    //       </div>
    //       <button
    //         className="inline-flex md:hidden items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring"
    //         type="button"
    //       >
    //         <LangSelector />
    //       </button>
    //     </div>
    //   </div>
    // </section>

    // <section
    //   className="bg-[#003976] top-0 left-0 right-0 z-50 h-[100px] fixed"
    //   id="navbar"
    // >
    //   <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
    //     <div className="flex items-center justify-between">
    //       <div className="text-left md:text-center">
    //         <Hud />
    //       </div>

    //       <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 sm:justify-end w-full">
    //         <div className="order-2 sm:order-1 mt-4 sm:mt-0">
    //           <div data-aos="fade-down" data-aos-duration="3000">
    //             <Link
    //               to="contact"
    //               spy={true}
    //               smooth={true}
    //               offset={-70}
    //               duration={800}
    //             >
    //               <button
    //                 className="block rounded-lg bg-white border-4 border-blue-400 font-bold w-full px-5 py-3 text-sm text-[#245EC5] transition hover:bg-gray-300 focus:ring btn relative"
    //                 id="scroll-button"
    //                 type="button"
    //                 data-aos="fade-down"
    //                 data-aos-duration="3000"
    //               >
    //                 {t("Inscrivez-vous maintenant")}
    //               </button>
    //             </Link>
    //           </div>
    //         </div>

    //         <div className="order-1 sm:order-2 sm:ml-4 flex justify-end w-full sm:w-auto">
    //           <button
    //             className="inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring"
    //             type="button"
    //           >
    //             <LangSelector />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <section
    //   className="bg-[#003976] top-0 left-0 right-0 z-50 h-[100px] fixed"
    //   id="navbar"
    // >
    //   <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
    //     <div className="sm:flex sm:items-center sm:justify-between">
    //       <div className="text-left md:text-center">
    //         <Hud />
    //       </div>

    //       <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
    //         <div data-aos="fade-down" data-aos-duration="3000">
    //           <Link
    //             to="contact"
    //             spy={true}
    //             smooth={true}
    //             offset={-70}
    //             duration={800}
    //           >
    //             <button
    //               className="block rounded-lg bg-white border-4 border-blue-400 font-bold w-full px-5 py-3 text-sm text-[#245EC5] transition hover:bg-gray-300 focus:ring btn relative"
    //               id="scroll-button"
    //               type="button"
    //               data-aos="fade-down"
    //               data-aos-duration="3000"
    //             >
    //               {t("Inscrivez-vous maintenant")}
    //             </button>
    //           </Link>
    //         </div>

    //         <div className="flex justify-end w-full sm:w-auto">
    //           <button
    //             className="inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring"
    //             type="button"
    //           >
    //             <LangSelector />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <section
    //   className="bg-[#003976] top-0 left-0 right-0 z-50 h-[100px] fixed"
    //   id="navbar"
    // >
    //   <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
    //     <div className="sm:flex sm:items-center sm:justify-between">
    //       <div className="text-left md:text-center">
    //         <Hud />
    //       </div>

    //       <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
    //         <div data-aos="fade-down" data-aos-duration="3000">
    //           <Link
    //             to="contact"
    //             spy={true}
    //             smooth={true}
    //             offset={-70}
    //             duration={800}
    //           >
    //             <button
    //               className="block rounded-lg bg-white border-4 border-blue-400 font-bold w-full px-5 py-3 text-sm text-[#245EC5] transition hover:bg-gray-300 focus:ring btn relative"
    //               id="scroll-button"
    //               type="button"
    //               data-aos="fade-down"
    //               data-aos-duration="3000"
    //             >
    //               {t("Inscrivez-vous maintenant")}
    //             </button>
    //           </Link>
    //         </div>

    //         <div className="flex justify-end w-full sm:w-auto">
    //           <button
    //             className="inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring"
    //             type="button"
    //           >
    //             <LangSelector />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <section
    //   className="bg-[#003976] top-0 left-0 right-0 z-50 h-[100px] fixed"
    //   id="navbar"
    // >
    //   <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
    //     <div className="flex items-center justify-between">
    //       <div className="text-left md:text-center">
    //         <Hud />
    //       </div>

    //       <div className="flex items-center gap-4">
    //         <div data-aos="fade-down" data-aos-duration="3000">
    //           <Link
    //             to="contact"
    //             spy={true}
    //             smooth={true}
    //             offset={-70}
    //             duration={800}
    //           >
    //             <button
    //               className="block rounded-lg bg-white border-4 border-blue-400 font-bold w-full px-5 py-3 text-sm text-[#245EC5] transition hover:bg-gray-300 focus:ring btn relative"
    //               id="scroll-button"
    //               type="button"
    //               data-aos="fade-down"
    //               data-aos-duration="3000"
    //             >
    //               {t("Inscrivez-vous maintenant")}
    //             </button>
    //           </Link>
    //         </div>

    //         <button
    //           className="md:inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring"
    //           type="button"
    //         >
    //           <LangSelector />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      className="bg-[#003976]  top-0 left-0 right-0 z-50 h-[100px] fixed  "
      id="navbar"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* <div className=" flex md:text-center text-left  ">
            <Hud />
            <button
              className=" md:inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition  hover:text-gray-700 focus:outline-none focus:ring "
              type="button"
            >
              <LangSelector />
            </button>
          </div> */}
          {/* <div className="flex md:text-center text-left">
            <Hud />
            <button
              className=" md:inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring ml-auto"
              type="button"
            >
              <LangSelector />
            </button>
          </div> */}
          <div className="flex md:text-center text-left">
            <Hud />
            <button
              className="sm:hidden inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring ml-auto"
              type="button"
            >
              <LangSelector />
            </button>
          </div>

          {/* <div className="flex md:text-center text-left">
            <Hud />
            <button
              className="hidden sm:inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring ml-auto"
              type="button"
            >
              <LangSelector />
            </button>
          </div> */}

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <div data-aos="fade-down" data-aos-duration="3000">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                // ignoreCancelEvents={true}
              >
                <button
                  className="block rounded-lg bg-white border-4 border-blue-400 font-bold  w-full px-5 py-3 text-sm  text-[#245EC5]  transition hover:bg-gray-300 focus:ring btn relative"
                  id="scroll-button"
                  type="button"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                >
                  {t("Inscrivez-vous maintenant")}
                </button>
              </Link>
            </div>

            <button
              className=" hidden md:inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition  hover:text-gray-700 outline-none  "
              type="button"
            >
              <LangSelector />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
