"use client";
import React, { useEffect, useRef } from "react";
import Play from "../icon/Play";

const Player: React.FC = ({ className }: { className?: string }) => {
  const modalbg = useRef<HTMLDivElement>(null);
  const modalSwitch = useRef<HTMLParagraphElement>(null);
  const modalBox = useRef<HTMLDivElement>(null);
  const modalClose = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeModal = () => {
      if (modalBox.current && modalbg.current) {
        modalBox.current.classList.add("hidden");
        modalbg.current.classList.add("hidden");
      }
    };

    const openModal = () => {
      if (modalBox.current && modalbg.current) {
        modalBox.current.classList.remove("hidden");
        modalbg.current.classList.remove("hidden");
      }
    };

    if (modalbg.current && modalSwitch.current && modalClose.current) {
      modalbg.current.addEventListener("click", closeModal);
      modalSwitch.current.addEventListener("click", openModal);
      modalClose.current.addEventListener("click", closeModal);
    }

    return () => {
      if (modalbg.current && modalSwitch.current && modalClose.current) {
        modalbg.current.removeEventListener("click", closeModal);
        modalSwitch.current.removeEventListener("click", openModal);
        modalClose.current.removeEventListener("click", closeModal);
      }
    };
  }, []);

  return (
    <>
      <div className=" flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          ref={modalSwitch}
          id="modal-switch"
          className="text-[10vw] bg-gradient-to-r from-indigo-500 via-purple-500 text-transparent bg-clip-text to-pink-500 font-bold cursor-pointer"
        >
          <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-purple-600 opacity-70 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-purple-600 opacity-70 animate-pulse delay-1000"></div>
            <i className="absolute fas fa-bell text-white text-4xl"></i>
            <div className="z-10">
              <Play />
            </div>
          </div>

        </div>
      </div>
      {/* Modal  */}
      <div className=" flex items-center justify-center w-full  bg-transparent">
        <div
          ref={modalbg}
          id="modal-bg"
          className="w-full h-screen bg-transparent top-0 absolute hidden"
        ></div>
        <div
          ref={modalBox}
          id="modal-box"
          className="sm:w-[1400px]  sm:min-w-[40vw] min-w-[80vw] min-h-[40vh]  flex-col items-center gap-2 -translate-y-1/2 p-6 bg-[#c0afaf00] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute hidden"
        >
          <span
            ref={modalbg}
            className="text-2xl font-medium cursor-pointer pb-2 "
          >
            <svg
              className=""
              width="50px"
              height="50px"
              viewBox="0 0 16 16"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="16" height="16" id="icon-bound" fill="none" />
              <polygon
                points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 
	13.293,14.707 14.707,13.293 9.414,8 "
              />
            </svg>
          </span>

          <div className=" flex items-center justify-center">
            <iframe
              className="md:w-full  w-[400px] h-[600px]  "
              src="https://www.youtube.com/embed/GxYfPLD1Eb4?si=zjl0AyRlWY0be8Eh&amp;controls=0"
              title="YouTube Player player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <button
            ref={modalClose}
            id="modal-close"
            className="p-3 mt-4 bg-[#4F46E5] rounded-lg w-full text-white mb-20"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Player;
