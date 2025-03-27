import tw from 'twin.macro'
import React from 'react'
import ThumbnailAboutUs1 from 'assets/unsplash_LRXYS0tSyGc.svg'

const ThumbnailAboutUs: React.FC = () => {
  return (
    <div tw="flex">
      <img src={ThumbnailAboutUs1} />
    </div>
  )
}
export default ThumbnailAboutUs
