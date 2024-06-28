import React from "react";

const CheckMarkCircleIcon: React.FC = () => (
  <svg
  
    fill="#000000"
    // width="40px"
    // height="40px"
    
    viewBox="0 0 24 24"
    id="check-mark-circle"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className=" md:w-[40px] md:h-[40px] w-[20px] h-[20px]"
  >
    <polyline
      id="secondary"
      points="8 11.5 11 14.5 16 9.5"
      style={{
        fill: "none",
        stroke: "#FFFFFF",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <rect
      id="primary"
      x="3"
      y="3"
      width="18"
      height="18"
      rx="9"
      style={{
        fill: "none",
        stroke: "#003976",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);

export default CheckMarkCircleIcon;
