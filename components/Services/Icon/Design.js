import React from "react";

function Design() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="98"
      fill="none"
      viewBox="0 0 100 98"
    >
      <g filter="url(#filter0_dd_9_115)">
        <circle cx="55" cy="49" r="40" fill="#FACC15"></circle>
        <path
          stroke="#111827"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M42.5 38.5l-5 12.5-10-27.5 27.5 10-12.5 5zm0 0L55 51M22.97 6.596l1.942 7.245m-7.072 7.07l-7.244-1.94m29.278-7.845l-5.303 5.303M20.429 30.571l-5.303 5.303"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_dd_9_115"
          width="100"
          height="98"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="1"
            result="effect1_dropShadow_9_115"
          ></feMorphology>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_115"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="1"
            result="effect2_dropShadow_9_115"
          ></feMorphology>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="3"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_9_115"
            result="effect2_dropShadow_9_115"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_9_115"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Design;
