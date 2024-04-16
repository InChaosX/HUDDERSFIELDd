"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { LangSelector } from '../LangSelector'
import { Link } from "react-scroll";
import { T, useTranslate } from "@tolgee/react";


function Header() {
  
  const { t } = useTranslate();





  return (
    <section
      className="bg-white  top-0 left-0 right-0 z-50 h-[100px] fixed"
      id="navbar"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="md:text-center text-left  ">
            <Image
              src="/huddersfield-logo.png"
              alt="huddersfield"
              width={200}
              height={200}
            ></Image>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <div>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                // ignoreCancelEvents={true}
              >
                <button
                  className="block rounded-lg bg-[#245EC5] border-4 border-white bg-gradient-to-r from-blue-500 to-yellow-300 w-full px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring btn relative"
                  id="scroll-button"
                  type="button"
                >
                  {t("Inscrivez-vous maintenant")}
                </button>
              </Link>
            </div>

            <button
              className=" hidden md:inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition  hover:text-gray-700 focus:outline-none focus:ring "
              type="button"
            >
              {/* <LocalSwitcher /> */}
              <LangSelector />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
