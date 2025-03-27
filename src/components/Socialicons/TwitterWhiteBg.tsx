import tw from 'twin.macro'
import React from 'react'

const TwitterWhiteBgIcon: React.FC = () => {
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
        <g filter="url(#filter0_d_24_126)">
          <circle cx="41.5" cy="33.5" r="24.5" fill="white" />
        </g>
        <path
          d="M51.4302 28.4079C51.446 28.63 51.446 28.8521 51.446 29.0742C51.446 35.8476 46.2906 43.6522 36.868 43.6522C33.9651 43.6522 31.2684 42.8114 29 41.3521C29.4125 41.3997 29.809 41.4155 30.2373 41.4155C32.6326 41.4155 34.8375 40.6065 36.5983 39.2265C34.3458 39.1789 32.4581 37.7036 31.8077 35.6731C32.125 35.7207 32.4422 35.7524 32.7754 35.7524C33.2354 35.7524 33.6955 35.689 34.1237 35.578C31.776 35.102 30.0152 33.0399 30.0152 30.5494V30.486C30.6973 30.8667 31.4905 31.1046 32.3312 31.1363C30.9511 30.2163 30.0469 28.6458 30.0469 26.8692C30.0469 25.9174 30.3007 25.045 30.7449 24.2835C33.2671 27.3927 37.0583 29.4231 41.3096 29.6452C41.2303 29.2645 41.1827 28.868 41.1827 28.4714C41.1827 25.6478 43.4669 23.3477 46.3064 23.3477C47.7816 23.3477 49.1141 23.9663 50.05 24.9657C51.208 24.7436 52.3184 24.3153 53.302 23.7284C52.9212 24.9181 52.1122 25.9175 51.0494 26.552C52.0805 26.441 53.0799 26.1554 53.9999 25.7588C53.302 26.774 52.4295 27.6782 51.4302 28.4079Z"
          fill="#091156"
        />
        <defs>
          <filter
            id="filter0_d_24_126"
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
              result="effect1_dropShadow_24_126"
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
              result="effect1_dropShadow_24_126"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_24_126"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  )
}

export default TwitterWhiteBgIcon
