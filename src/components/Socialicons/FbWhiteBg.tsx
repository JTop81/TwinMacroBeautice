import tw from 'twin.macro'
import React from 'react'

const FbWhiteBgIcon: React.FC = () => {
  return (
    // <div sx={{position: "flex", right:3}} justifyContent='center'>
    <button tw="hocus:(scale-125)">
      <svg
        width="79"
        height="79"
        viewBox="0 0 79 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_24_129)">
          <circle cx="41.5" cy="33.5" r="24.5" fill="white" />
        </g>
        <path
          d="M46.3174 35.0625L47.0117 30.5381H42.6704V27.6021C42.6704 26.3643 43.2769 25.1577 45.2212 25.1577H47.1948V21.3057C47.1948 21.3057 45.4038 21 43.6914 21C40.1162 21 37.7793 23.167 37.7793 27.0898V30.5381H33.8052V35.0625H37.7793V46H42.6704V35.0625H46.3174Z"
          fill="#091156"
        />
        <defs>
          <filter
            id="filter0_d_24_129"
            x="0"
            y="0"
            width="79"
            height="79"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_24_129"
            />
            <feOffset dx="-2" dy="6" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.900764 0 0 0 0 0.912127 0 0 0 0 0.991667 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_24_129"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_24_129"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  )
}

export default FbWhiteBgIcon
