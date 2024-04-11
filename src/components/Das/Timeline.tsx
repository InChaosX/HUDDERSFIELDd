import React from 'react'

function Timeline() {
  return (
    <section className=" bg-green-300 w-full ">
      <div className="container bg-red-400 mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border st"></div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-center   items-center w-full  right-timeline" >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 md:ml-0 ml-4 bg-[#245EC5] shadow-xl md:w-20 md:h-20 w-10 h-10 rounded-full">
              <svg
                fill="#fff"
                className="text-indigo-500 md:w-20 md:h-20 w-10 h-10  "
                viewBox="0 0 256 256"
                id="Flat"
              >
                <path d="M128,20A108,108,0,1,0,236,128,108.12186,108.12186,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09562,84.09562,0,0,1,128,212ZM144,84v92a12,12,0,0,1-24,0V106.417l-5.3457,3.5625a12.00027,12.00027,0,1,1-13.3086-19.97265l24-15.99317A12.00071,12.00071,0,0,1,144,84Z" />
              </svg>
            </div>

            <div className=" md:mr-0 mr-60  order-1 bg-transparent rounded-lg  w-5/12 px-8 py-4 ">
              <div className="bg-[#F7F809] w-[300px] p-5   ">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">
                  Pré-Universitaire
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 pb-3">
                  Année de Fondation Internationale
                </p>
                <img className="h-auto max-w-44" src="/NCUK-LOGO.png" />
              </div>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-center  flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 md:mr-0 mr-56 bg-[#245EC5] shadow-xl md:w-20 md:h-20 w-10 h-10 rounded-full">
              {/* <h1 className="mx-auto text-white font-semibold text-lg">2</h1> */}
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
            <div className="  order-1 bg-transparent rounded-lg  w-5/12 px-8 py-4">
              <div className="bg-[#F7F809] w-[300px] p-5 ml-0 md:ml-56  ">
                <h3 className="mb-3 font-bold text-black text-xl">Stage 1</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-black  text-opacity-100 pb-3">
                  Première Année Internationale
                </p>
                <img className="h-auto max-w-44" src="/NCUK-LOGO.png" />
              </div>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-center   items-center w-full  right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 md:ml-0 ml-4 bg-[#245EC5] shadow-xl md:w-20 md:h-20 w-10 h-10 rounded-full">
              {/* <h1 className="mx-auto font-semibold text-lg text-white ">111 </h1> */}
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

            <div className=" md:mr-0 mr-60  order-1 bg-transparent rounded-lg  w-5/12 px-8 py-4 ">
              <div className="bg-[#F7F809] w-[300px] p-5   ">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">
                  Stage 2
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 pb-3">
                  Deuxième Année internationale
                </p>
                <img className="h-auto max-w-44" src="/NCUK-LOGO.png" />
              </div>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-center  flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 md:mr-0 mr-56 bg-[#245EC5] shadow-xl md:w-20 md:h-20 w-10 h-10 rounded-full">
              {/* <h1 className="mx-auto text-white font-semibold text-lg">2</h1> */}
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
            <div className="  order-1 bg-transparent rounded-lg  w-5/12 px-8 py-4">
              <div className="bg-[#F7F809] w-[300px] p-5 ml-0 md:ml-56   ">
                <h3 className="mb-3 font-bold text-black text-xl">Stage 3</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100 pb-3">
                  Diplôme de Dernière Année
                </p>
                <img className="h-auto max-w-44" src="/huddersfield-logo.png" />
              </div>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-center   items-center w-full  right-timeline ">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 md:ml-0 ml-4 bg-[#245EC5] shadow-xl md:w-20 md:h-20 w-10 h-10 rounded-full">
              {/* <h1 className="mx-auto font-semibold text-lg text-white ">111 </h1> */}
              <svg
                fill="#fff"
                className="text-indigo-500 md:w-20 md:h-20 w-10 h-10  "
                viewBox="0 0 256 256"
                id="Flat"
              >
                <path d="M128,20A108,108,0,1,0,236,128,108.12186,108.12186,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09562,84.09562,0,0,1,128,212ZM144,84v92a12,12,0,0,1-24,0V106.417l-5.3457,3.5625a12.00027,12.00027,0,1,1-13.3086-19.97265l24-15.99317A12.00071,12.00071,0,0,1,144,84Z" />
              </svg>
            </div>

            <div className=" md:mr-0 mr-60  order-1 bg-transparent rounded-lg  w-5/12 px-8 py-4 ">
              <div className="bg-[#F7F809] w-[300px] p-5   ">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">
                  DIPLÔMÉ
                </h3>
                {/* <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Année de Fondation Internationale
                </p> */}
                <img className="h-auto max-w-44" src="/huddersfield-logo.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;