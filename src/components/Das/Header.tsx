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
    <section
      className="bg-[#003976]  top-0 left-0 right-0 z-50 h-[100px] fixed  "
      id="navbar"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="md:text-center text-left  ">
            <Hud />
          </div>

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
