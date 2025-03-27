import tw from 'twin.macro'

import TextTitle from 'components/TextTile/Title'
import ThumbnailAboutSite from './ThumbnailAboutSite'

const AboutSite = () => (
  <div tw="flex flex-col gap-y-5 mx-auto justify-center">
    <div tw="flex flex-col gap-y-2 justify-center">
      <TextTitle variant="title">About</TextTitle>
      <TextTitle variant="slogan">
        We are a leading beauty clinic that has <br /> been around since 2002
      </TextTitle>
      <TextTitle variant="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        <br />
        purus sit amet luctus venenatis
      </TextTitle>
    </div>
    <div tw="container max-sm:[margin-left: 50px]">
      <ThumbnailAboutSite />
    </div>
  </div>
)
export default AboutSite
