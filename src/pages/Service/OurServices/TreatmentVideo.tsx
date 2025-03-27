import tw from 'twin.macro'
import React from 'react'
import ThumbnailTreatMentVideo from 'assets/unsplash_NPjNtTExSJ4.svg'
import PlayButtonWhite from 'assets/PlayButtonWhite.svg'
import TextTitle from 'components/TextTile/Title'

const TreatmentVideo: React.FC = () => {
  return (
    <div tw="container relative mx-auto max-md:hidden">
      <img
        tw="[z-index: -10] w-max"
        src={ThumbnailTreatMentVideo}
        alt="thumbnailTreatmentVideo"
      />
      <div tw="absolute  h-full flex justify-center items-center top-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 529"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1440" height="529" fill="#091156" fill-opacity="0.6" />
        </svg>
      </div>
      <div tw="container flex flex-row max-md:scale-50">
        <div tw="flex flex-col gap-y-2 w-fit h-fit absolute justify-center [top: 35%] [left: 10%]">
          <TextTitle variant="sloganWhite">
            Best responsibility and service
            <br /> for our customers
          </TextTitle>
          <TextTitle variant="lightGrayDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            <br /> aliquam, purus sit amet luctus venenatis
          </TextTitle>
        </div>
        <div tw="flex absolute justify-end max-w-full max-h-full [top:33%] [right: 12%]">
          <button>
            <img src={PlayButtonWhite} tw="w-fit h-fit" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default TreatmentVideo
