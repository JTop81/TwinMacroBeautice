import tw, { css, styled } from 'twin.macro'
import AnimationContactUs from 'components/ContactUs/AnimationContactUs'
import TextTitle from 'components/TextTile/Title'
import ContactUsForm from 'components/ContactUs/ContactForm'

const ContactUsContactSite = () => (
  <div tw="flex flex-col justify-center mx-auto max-md:px-2">
    {/* Title desc  */}
    <div tw="flex flex-row gap-x-32 max-md:flex-col max-md:gap-y-4 ">
      <div tw="flex flex-col gap-4">
        <TextTitle variant="title">Contact Us</TextTitle>
        <TextTitle variant="slogan">
          Contact service for our
          <br /> customers
        </TextTitle>
      </div>
      <TextTitle variant="desc" tw="ml-64 max-md:ml-0">
        Lorem ipsum dolor sit amet, consectetur
        <br /> adipiscing elit ut aliquam, purus sit amet
        <br /> luctus venenatis
      </TextTitle>
    </div>
    {/* Animation + form  */}
    <div tw="flex flex-row gap-x-32 max-md:flex-col max-md:gap-y-4">
      <AnimationContactUs />
      <ContactUsForm />
    </div>
  </div>
)

export default ContactUsContactSite
