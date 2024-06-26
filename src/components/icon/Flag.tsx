import React from 'react'

function Flag({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32">
      <rect
        x="1"
        y="4"
        width="25"
        height="25"
        rx="4"
        ry="4"
        fill="#071b65"
      ></rect>
      <path
        d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
        fill="#fff"
      ></path>
      <path
        d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
        fill="#b92932"
      ></path>
      <path
        d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
        fill="#b92932"
      ></path>
      <path
        d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
        fill="#fff"
      ></path>
      <path
        d="M22.25,13l8.363-6.691c-.225-.48-.542-.904-.929-1.257l-9.934,7.947h2.5Z"
        fill="#b92932"
      ></path>
      <path
        d="M9.75,19L1.387,25.691c.225,.48,.542,.904,.929,1.257l9.934-7.947h-2.5Z"
        fill="#b92932"
      ></path>
      <path fill="#fff" d="M13 4H19V28H13z"></path>
      <path fill="#fff" d="M1 13H31V19H1z"></path>
      <path fill="#b92932" d="M14 4H18V28H14z"></path>
      <path
        transform="rotate(90 16 16)"
        fill="#b92932"
        d="M14 1H18V31H14z"
      ></path>
      <path
        d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
        opacity=".15"
      ></path>
      <path
        d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
        fill="#fff"
        opacity=".2"
      ></path>
    </svg>
  );
}

export default Flag;