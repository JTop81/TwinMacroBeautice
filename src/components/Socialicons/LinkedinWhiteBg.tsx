import tw from 'twin.macro'
import React from 'react'

const LinkedinWhiteBgIcon: React.FC = () => {
  return (
    // <div sx={{position: "flex", right:3}} justifyContent='center'>
    <button tw="hocus:(scale-125)">
      <svg
        width="94"
        height="94"
        viewBox="0 0 103 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_178_195)">
          <circle cx="51.5" cy="47.5" r="21.5" fill="white" />
        </g>
        <path
          d="M45.459 55.875H40.9238V41.2705H45.459V55.875ZM43.189 39.2783C41.7388 39.2783 40.5625 38.0771 40.5625 36.627C40.5625 35.9304 40.8392 35.2623 41.3318 34.7698C41.8243 34.2772 42.4924 34.0005 43.189 34.0005C43.8855 34.0005 44.5536 34.2772 45.0462 34.7698C45.5387 35.2623 45.8154 35.9304 45.8154 36.627C45.8154 38.0771 44.6387 39.2783 43.189 39.2783ZM62.4326 55.875H57.9072V48.7656C57.9072 47.0713 57.873 44.8984 55.5493 44.8984C53.1914 44.8984 52.8301 46.7393 52.8301 48.6436V55.875H48.2998V41.2705H52.6494V43.2627H52.7129C53.3184 42.1152 54.7974 40.9043 57.0039 40.9043C61.5938 40.9043 62.4375 43.9268 62.4375 47.8525V55.875H62.4326Z"
          fill="#091156"
        />
        <defs>
          <filter
            id="filter0_d_178_195"
            x="0"
            y="0"
            width="103"
            height="103"
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
              radius="11"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_178_195"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="9.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.964706 0 0 0 0 0.968627 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_178_195"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_178_195"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  )
}

export default LinkedinWhiteBgIcon
