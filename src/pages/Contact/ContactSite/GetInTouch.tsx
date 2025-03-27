import tw from 'twin.macro'
import TextTitle from 'components/TextTile/Title'

import AddressContact from './Address'
import MailContact from './Mail'
import PhoneContact from './Phone'

const GetInTouch = () => (
  <div tw="flex flex-col justify-center [row-gap: 5.5rem] [text-align: center]">
    <div tw="flex flex-col gap-y-5">
      <TextTitle variant="title">Get In Touch</TextTitle>
      <TextTitle variant="slogan">Get direct handling by us</TextTitle>
      <TextTitle variant="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </TextTitle>
    </div>
    <div tw="flex flex-row gap-[4.5rem] self-center max-md:flex-col">
      <AddressContact />
      <PhoneContact />
      <MailContact />
    </div>
  </div>
)
export default GetInTouch
