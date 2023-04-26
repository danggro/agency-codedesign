import React from "react";

function Brand() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="96"
      fill="none"
      viewBox="0 0 100 96"
    >
      <g filter="url(#filter0_dd_9_112)">
        <circle cx="55" cy="47" r="40" fill="#FACC15"></circle>
        <path
          stroke="#111827"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M17.5 8.5v10m-5-5h10m-2.5 30v10m-5-5h10m12.5-40l5.714 17.143L57.5 31l-14.286 5.357L37.5 53.5l-5.714-17.143L17.5 31l14.286-5.357L37.5 8.5z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_dd_9_112"
          width="100"
          height="96"
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
            result="effect1_dropShadow_9_112"
          ></feMorphology>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_112"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="1"
            result="effect2_dropShadow_9_112"
          ></feMorphology>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="3"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_9_112"
            result="effect2_dropShadow_9_112"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_9_112"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Brand;
