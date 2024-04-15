import Image from "next/image";
import React from "react";
import Player from "./Player";

function Video() {

  
  return (
    <section
      className="  py-28 flex items-center justify-center   "
      style={{
        backgroundImage: 'url("/rt.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(100%)", // Adjust brightness here
        transition: "filter 0.3s",
      }}
    >
      <div
        className="flex items-center justify-center relative"
        data-aos="slide-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        data-aos-anchor-placement="center"
      >
        <Image
          width={1500}
          height={1500}
          alt="huddersfield"
          src="/huddersfield-image.jpeg"
          // className="absolute inset-0 md:h-[700px] md:w-full h-[500px] object-cover"
          className="w-[100%] h-[600px] object-contain "
        />
        <h1 className="text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Heloo
        </h1>
        <Player/>
      </div>
    </section>
  );
}

export default Video;
