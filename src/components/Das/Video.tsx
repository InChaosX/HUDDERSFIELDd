import React from 'react'

function Video() {
  return (
    <section
      className="  py-28   "
      style={{
        backgroundImage: 'url("/rt.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(100%)", // Adjust brightness here
        transition: "filter 0.3s",
        // clipPath: "polygon(0 1%, 100% 0, 100% 80%, 48% 100%, 0 80%, 0 43%)",
      }}
    >
      <div
        className="flex items-center justify-center "
        data-aos="slide-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        data-aos-anchor-placement="center"
      >
        {/* <iframe
          className="w-[900px] h-[600px]  "
         
          src="https://www.youtube.com/embed/GxYfPLD1Eb4?si=3ZBhc22w20j-heM1"
          title="London Academy, NCUK and University of Huddersfield Partnership TV Coverage"
        
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe> */}
        <iframe
          className="w-[1500px] h-[600px]  "
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/GxYfPLD1Eb4?si=zjl0AyRlWY0be8Eh&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
}

export default Video;