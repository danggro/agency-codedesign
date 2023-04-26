import React from "react";

function WebDeveloper() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="98"
      height="98"
      fill="none"
      viewBox="0 0 98 98"
    >
      <g filter="url(#filter0_dd_9_114)">
        <circle cx="53" cy="49" r="40" fill="#FACC15"></circle>
        <path
          stroke="#111827"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M30 51l10-40m10 10l10 10-10 10m-30 0L10 31l10-10"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_dd_9_114"
          width="98"
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
            result="effect1_dropShadow_9_114"
          ></feMorphology>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_114"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="1"
            result="effect2_dropShadow_9_114"
          ></feMorphology>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="3"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_9_114"
            result="effect2_dropShadow_9_114"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_9_114"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default WebDeveloper;
