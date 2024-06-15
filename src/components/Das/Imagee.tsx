"use client"
import React, { useState } from 'react'
import Image from "next/image";
import VideoModal2 from './VideoModal2';
import Play from '../icon/Play';

function Imagee() {
  
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
     setIsModalOpen(true);
   };

   const handleCloseModal = () => {
     setIsModalOpen(false);
   };

  return (
    <section className="w-full h-full">
      <div className="relative">
        {/* the image  */}
        <div>
          <Image
            width={1500}
            height={1500}
            alt="huddersfield"
            src="/huddersfield-image.jpeg"
            className="w-[100%] h-[600px] object-contain "
          />
        </div>

        {/* the icon  */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center">
          <div
            className="relative h-20 w-20 rounded-full bg-[#245EC5] mx-auto flex items-center justify-center cursor-pointer"
            onClick={handleOpenModal}
          >
            <div className="absolute inset-0 rounded-full bg-[#245EC5] opacity-70 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-[#245EC5] opacity-70 animate-pulse delay-1000"></div>
            <i className="absolute fas fa-bell text-white text-4xl"></i>
            <div className="z-10">
              <Play />
            </div>
          </div>
        </div>

        <VideoModal2 isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
}

export default Imagee;