import tw from 'twin.macro'
import React from 'react'
import MailIcon from 'assets/mail-bulk.svg'
import TextTitle from 'components/TextTile/Title'

const MailContact: React.FC = () => {
  return (
    <div tw="flex flex-none flex-col gap-y-3 justify-center [text-align: center] place-content-center">
      <div tw="mx-auto">
        <img
          src={MailIcon}
          alt="Mail"
          tw="[align-content: center] justify-items-center justify-center place-content-center"
        />
      </div>
      <div tw="flex-col">
        <TextTitle variant="title" tw="">
          Mail
        </TextTitle>

        <TextTitle variant="slogan" tw="text-[18px]">
          mail@company.com
        </TextTitle>

        <TextTitle variant="desc" tw="text-[14px]">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit ut <br /> aliquam, purus sit
        </TextTitle>
      </div>
    </div>
  )
}
export default MailContact
