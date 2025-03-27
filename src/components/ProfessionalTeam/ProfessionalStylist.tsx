import tw from 'twin.macro'
import React from 'react'
import Stylist from 'assets/stylistAvatar.svg'
import TextTitle from '../TextTile/Title'
import FbWhiteBgIcon from '../Socialicons/FbWhiteBg'
import TwitterWhiteBgIcon from '../Socialicons/TwitterWhiteBg'
import InstagramWhiteBgIcon from '../Socialicons/InstagramWhiteBg'

const StylistProfessional: React.FC = () => {
  return (
    <div tw="flex flex-none flex-col gap-y-3 justify-center [text-align: center] place-content-center">
      <div tw="mx-auto">
        <img
          src={Stylist}
          alt="Stylist"
          tw="[align-content: center] justify-items-center justify-center place-content-center"
        />
      </div>
      <div tw="flex-col">
        <TextTitle variant="title" tw="">
          Stylist
        </TextTitle>

        <TextTitle variant="slogan" tw="text-[18px]">
          Briyan Nevalli
        </TextTitle>

        <TextTitle variant="desc" tw="text-[14px]">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit ut <br /> aliquam, purus sit
        </TextTitle>
      </div>
      <div tw="flex flex-row gap-x-2 justify-center">
        <TwitterWhiteBgIcon />
        <FbWhiteBgIcon />
        <InstagramWhiteBgIcon />
      </div>
    </div>
  )
}
export default StylistProfessional
