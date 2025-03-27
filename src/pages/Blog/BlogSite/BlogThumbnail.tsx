import tw from 'twin.macro'
import React from 'react'
import BlogThumbnail1 from 'assets/unsplash_QA9fRIi6sFw.svg'
import TextTitle from 'components/TextTile/Title'

const BlogThumbnail: React.FC = () => {
  return (
    <div tw="container relative mx-auto">
      <img tw="[z-index: -10]" src={BlogThumbnail1} />
      <div tw="absolute  h-full flex justify-center items-center top-0">
        <svg
          width="100%"
          height="285"
          viewBox="0 0 1440 285"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1440" height="285" fill="#091156" fill-opacity="0.6" />
        </svg>
      </div>
      <div tw="flex flex-row gap-y-2 absolute w-full h-full items-center top-0">
        <TextTitle variant="sloganWhite" tw="[text-align: center] w-1/2">
          Blog
        </TextTitle>
        <TextTitle variant="lightGrayDesc" tw="[text-align: center] w-1/2">
          Home • Blog
        </TextTitle>
      </div>
    </div>
  )
}
export default BlogThumbnail
