import tw, { css, styled } from 'twin.macro'

import AnimationContactUs from './AnimationContactUs'

import TextTitle from '../TextTile/Title'
import ContactUsForm from './ContactForm'

const ContactUs = () => (
  <div tw="flex flex-col pt-36 justify-center">
    <div tw="flex flex-wrap flex-row max-md:flex-col justify-center ">
      <div tw="flex max-md:w-full">
        <AnimationContactUs />
      </div>
      {/* Title and Desc  */}
      <div tw="flex flex-col gap-y-5">
        <div tw="flex flex-col gap-y-5 pl-8">
          <TextTitle variant="title" tw="[text-align: left]">
            Contact Us
          </TextTitle>
          <TextTitle variant="slogan" tw="[text-align: left]">
            Send your inquiry to <br />
            our expert team
          </TextTitle>
          <TextTitle variant="desc" tw="[text-align: left]">
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </TextTitle>
          <ContactUsForm />
        </div>

        {/* Form  */}
      </div>
      {/* Title and Desc  */}
    </div>
  </div>
)

export default ContactUs
