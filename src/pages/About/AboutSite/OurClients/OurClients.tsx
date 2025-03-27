import tw from 'twin.macro'
import TextTitle from 'components/TextTile/Title'
import AmandaLogo from './AmandaLogo'
import BlitzLogo from './BlitzLogo'
import CircleLogo from './CircleLogo'
import GeorgeLogo from './GeorgeLogo'
import KzArtistLogo from './KzArtistLogo'

const OurClients = () => (
  <div tw="flex flex-col justify-center gap-y-4 mx-auto [text-align: center] ">
    <div tw="flex flex-col flex-wrap gap-2 my-auto mx-4">
      <TextTitle variant="title">Our Clients</TextTitle>
      <TextTitle variant="slogan">Well-known agencies</TextTitle>
      <TextTitle variant="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </TextTitle>
    </div>

    <div tw="flex flex-wrap justify-center gap-4">
      <BlitzLogo />
      <KzArtistLogo />
      <CircleLogo />
      <GeorgeLogo />
      <AmandaLogo />
    </div>
  </div>
)
export default OurClients
