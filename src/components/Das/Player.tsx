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

          {/* <svg
            id="svg-spin"
            className=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="90px"
            height="90px"
          >
            <circle  cx="32" cy="32" r="28" fill="#ffeb9b" />
            <circle cx="32" cy="32" r="21" fill="#f9dd8f" />
            <path
            
              fill="#8d6c9f"
              d="M32,6c14.336,0,26,11.664,26,26S46.336,58,32,58S6,46.336,6,32S17.664,6,32,6 M32,4	C16.536,4,4,16.536,4,32s12.536,28,28,28s28-12.536,28-28S47.464,4,32,4L32,4z"
            />
            <path
              fill="#fff8ee"
              d="M42.5,31.134l-17-9.815c-0.667-0.385-1.5,0.096-1.5,0.866v19.63c0,0.77,0.833,1.251,1.5,0.866 l17-9.815C43.167,32.481,43.167,31.519,42.5,31.134z"
            />
            <path
              fill="#8d6c9f"
              d="M25,43.818c-0.344,0-0.688-0.09-1-0.271c-0.626-0.361-1-1.009-1-1.732v-19.63 c0-0.723,0.374-1.371,1-1.732c0.623-0.362,1.371-0.363,2,0l17,9.815v0c0.626,0.361,1,1.009,1,1.732s-0.374,1.371-1,1.732l-17,9.815 C25.687,43.728,25.343,43.818,25,43.818z M25,22.185v19.63L42,32l0.5-0.866L42,32L25,22.185z"
            />
            <g >
              <path
                fill="#8d6c9f"
                d="M53.596,37.162c-0.063,0-0.126-0.006-0.189-0.018l-1.964-0.376 c-0.542-0.104-0.897-0.628-0.794-1.17c0.104-0.542,0.627-0.898,1.171-0.793l1.964,0.376c0.542,0.104,0.897,0.628,0.794,1.17 C54.485,36.829,54.066,37.162,53.596,37.162z"
              />
              <path
                fill="#8d6c9f"
                d="M51.997,42.133c-0.139,0-0.28-0.029-0.415-0.091l-1.819-0.832 c-0.502-0.229-0.723-0.823-0.493-1.325c0.229-0.501,0.82-0.726,1.325-0.493l1.819,0.832c0.502,0.229,0.723,0.823,0.493,1.325 C52.739,41.916,52.377,42.133,51.997,42.133z"
              />
              <path
                fill="#8d6c9f"
                d="M49.278,46.59c-0.216,0-0.435-0.07-0.618-0.214l-1.571-1.237c-0.434-0.342-0.508-0.97-0.167-1.404 c0.343-0.433,0.97-0.51,1.405-0.167l1.571,1.237c0.434,0.342,0.508,0.97,0.167,1.404C49.867,46.459,49.574,46.59,49.278,46.59z"
              />
              <path
                fill="#8d6c9f"
                d="M45.591,50.28c-0.296,0-0.589-0.131-0.787-0.381l-1.237-1.571 c-0.341-0.434-0.267-1.063,0.167-1.404c0.436-0.343,1.063-0.266,1.405,0.167l1.237,1.571c0.341,0.434,0.267,1.063-0.167,1.404 C46.025,50.21,45.807,50.28,45.591,50.28z"
              />
              <path
                fill="#8d6c9f"
                d="M41.134,52.998c-0.38,0-0.742-0.217-0.91-0.584l-0.832-1.819c-0.229-0.502-0.009-1.096,0.493-1.325 c0.504-0.233,1.096-0.008,1.325,0.493l0.832,1.819c0.229,0.502,0.009,1.096-0.493,1.325 C41.414,52.969,41.272,52.998,41.134,52.998z"
              />
              <path
                fill="#8d6c9f"
                className="animate-sping"
                d="M36.161,54.595c-0.47,0-0.89-0.333-0.981-0.812l-0.377-1.964c-0.104-0.542,0.252-1.066,0.794-1.17 c0.54-0.105,1.066,0.251,1.171,0.793l0.377,1.964c0.104,0.542-0.252,1.066-0.794,1.17C36.287,54.589,36.224,54.595,36.161,54.595z"
              />
            </g>
          </svg> */}
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
          {/* <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            consequatur?
          </p> */}

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
