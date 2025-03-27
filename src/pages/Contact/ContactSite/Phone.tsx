import tw from 'twin.macro'
import React from 'react'
import PhoneIcon from 'assets/phone-alt.svg'
import TextTitle from 'components/TextTile/Title'

const PhoneContact: React.FC = () => {
  return (
    <div tw="flex">
      <div tw="flex flex-none flex-col gap-y-3 justify-center [text-align: center] place-content-center bg-white w-[424px] h-[402px] rounded-[42px] drop-shadow-[0px 25px 50px rgba(246, 247, 255, 1)]">
        <div tw="mx-auto">
          <img
            src={PhoneIcon}
            alt="PhoneIcon"
            tw="[align-content: center] justify-items-center justify-center place-content-center"
          />
        </div>
        <div tw="flex-col">
          <TextTitle variant="title" tw="">
            Phone
          </TextTitle>

          <TextTitle variant="slogan" tw="text-[18px]">
            +896 120 5889
          </TextTitle>

          <TextTitle variant="desc" tw="text-[14px]">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit ut <br /> aliquam, purus sit
          </TextTitle>
        </div>
      </div>
    </div>
  )
}
export default PhoneContact
