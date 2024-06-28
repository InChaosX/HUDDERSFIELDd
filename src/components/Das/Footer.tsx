import React from 'react'
import { LangSelector } from '../LangSelector';

function Footer() {
  return (
    <section>
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
             
              <div className="h-48 w-48">
                <img src="/NCUK-LOGO.png" alt="NCKU" />
                <div>
                  {/* <p className="w-56 h-52 mt-3">
                    Contact Casablanca International Study Centre.
                  </p> */}
                </div>
              </div>
            </div>

            <p className=" md:text-left text-center text-sm text-gray-500 ">
              Phone: +212684 230 230
              <br />
              Email: ncuk@londonacademy.ma
              <br />
              website: ncukcasablanca.com
            </p>
          </div>
          <button
            className="  flex items-center justify-center md:mx-0 mx-auto gap-1.5 px-5 py-3 text-black transition  hover:text-gray-700 focus:outline-none focus:ring "
            type="button"
          >
            {/* <LocalSwitcher /> */}
            <LangSelector />
          </button>

          <div className=" mt-3 md:text-left text-center">
            Copyright &copy; 2024. All rights reserved.
          </div>
        </div>
      </footer>
      
    </section>
  );
}

export default Footer;