import tw from 'twin.macro'
import React from 'react'
import ThumbnailAboutSiteImg from 'assets/unsplash_DE6rYp1nAho.svg'

const ThumbnailAboutSite: React.FC = () => {
  return (
    <div tw="container flex relative [margin-left: -65px] lg:justify-center ">
      <img tw="w-full h-full" src={ThumbnailAboutSiteImg} alt="thumbnailAboutSite" />
      {/* Play button  */}
      <button tw="absolute top-[34%] left-[43%] max-md:scale-50 max-sm:[top: -1%] max-sm:[left: 24%]">
        <svg
          width="174"
          height="174"
          viewBox="0 0 174 174"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_162_200)">
            <circle cx="87" cy="83" r="44" fill="#091156" />
          </g>
          <path
            d="M103.067 82.0012C104.4 82.771 104.4 84.6955 103.067 85.4653L81.5666 97.8783C80.2333 98.6481 78.5667 97.6859 78.5667 96.1463L78.5667 71.3202C78.5667 69.7806 80.2333 68.8184 81.5667 69.5882L103.067 82.0012Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_162_200"
              x="0"
              y="0"
              width="174"
              height="174"
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
                radius="10"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_162_200"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="16.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.904167 0 0 0 0 0.914123 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_162_200"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_162_200"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
    </div>
  )
}
export default ThumbnailAboutSite
