import tw from 'twin.macro'
import React from 'react'
import ThumbnailVideoTour1 from 'assets/unsplash_eflLpWC1Geo_1.svg'
import TextTitle from 'components/TextTile/Title'

const ThumbnailVideoTour: React.FC = () => {
  return (
    <div tw="container relative mx-auto">
      <img
        tw="w-full [z-index: -8]"
        src={ThumbnailVideoTour1}
        alt="thumbnailVideoTour"
      />
      <div tw="absolute w-full h-full flex justify-center items-center top-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 628"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1440" height="628" fill="#091156" fill-opacity="0.6" />
        </svg>
      </div>
      {/* Play button  */}
      <button tw="absolute top-[50%] left-[43%] max-md:scale-50">
        <svg
          width="100%"
          height="165"
          viewBox="0 0 165 165"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_167_19)">
            <circle
              cx="82.5"
              cy="82.5"
              r="62.5"
              stroke="white"
              stroke-width="2"
              shape-rendering="crispEdges"
            />
          </g>
          <path
            d="M103.5 77.4378C108.167 80.1321 108.167 86.8679 103.5 89.5622L78.75 103.852C74.0833 106.546 68.25 103.178 68.25 97.7894L68.25 69.2106C68.25 63.822 74.0833 60.4541 78.75 63.1484L103.5 77.4378Z"
            stroke="white"
            stroke-width="2"
          />
          <defs>
            <filter
              id="filter0_d_167_19"
              x="0"
              y="0"
              width="165"
              height="165"
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
                radius="7"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_167_19"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_167_19"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_167_19"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
      <div tw="flex flex-col gap-y-2 absolute w-full h-full flex justify-center items-center top-[-10%]">
        <TextTitle variant="sloganWhite" tw="text-white [text-align: center]">
          Watch the video tour
        </TextTitle>
        <TextTitle variant="lightGrayDesc" tw="[text-align: center]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
          <br /> aliquam, purus sit amet luctus venenatis
        </TextTitle>
      </div>
    </div>
  )
}
export default ThumbnailVideoTour
