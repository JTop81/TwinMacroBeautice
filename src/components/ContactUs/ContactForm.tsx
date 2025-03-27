import tw, { css, styled } from 'twin.macro'
import PinkButton from '../Button/PinkButton'

const InputText1 = styled.input(() => [
  tw`h-[61.58px] border [border-radius: 15px] border-[#D9DDFE]`,
])

const InputText2 = styled.textarea(() => [
  tw`h-[239.47px] border [border-radius: 15px] border-[#D9DDFE]`,
])

const ContactUsForm = () => (
  <div tw="flex flex-wrap flex-col ">
    <div tw="flex flex-col gap-y-5">
      {/* Form  */}
      <div tw="flex flex-col gap-y-5 ">
        <div tw="flex flex-row flex-wrap gap-8 max-md:flex-col">
          <InputText1
            type="text"
            name="firstName"
            placeholder="First Name"
            tw="pl-4 max-md:w-full"
          />
          <InputText1
            type="text"
            name="lastName"
            placeholder="Last Name"
            tw="pl-4 max-md:w-full"
          />
        </div>
        <InputText1
          type="text"
          name="emailAddress"
          placeholder="Email address"
          tw="pl-4"
        />
        <InputText1
          type="text"
          name="subject"
          placeholder="Subject message"
          tw="pl-4"
        />
        <InputText2
          name="inquiry"
          placeholder="Your inquiry here"
          tw="pl-4 pt-4 resize-none"
        />
      </div>
      {/* Form  */}

      {/* Button  */}
      <div tw="flex flex-row">
        <PinkButton variant="sendMessageContactUs">Send Message</PinkButton>
      </div>
    </div>
  </div>
)

export default ContactUsForm
