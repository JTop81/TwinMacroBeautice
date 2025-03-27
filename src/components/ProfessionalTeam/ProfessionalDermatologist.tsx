import tw from 'twin.macro'
import React from 'react'
import Dermatologist from 'assets/dermatologistAvatar.svg'
import TextTitle from '../TextTile/Title'
import FbWhiteBgIcon from '../Socialicons/FbWhiteBg'
import InstagramWhiteBgIcon from '../Socialicons/InstagramWhiteBg'
import TwitterWhiteBgIcon from '../Socialicons/TwitterWhiteBg'

const DermatologistProfessional: React.FC = () => {
  return (
    <div tw="flex">
      <div tw="flex flex-none flex-col gap-y-3 justify-center [text-align: center] place-content-center bg-white w-[424px] h-[626px] rounded-[42px] drop-shadow-[0px 25px 50px rgba(246, 247, 255, 1)]">
        <div tw="mx-auto">
          <img
            src={Dermatologist}
            alt="Dermatologist"
            tw="[align-content: center] justify-items-center justify-center place-content-center"
          />
        </div>
        <div tw="flex-col">
          <TextTitle variant="title" tw="">
            Dermatologist
          </TextTitle>

          <TextTitle variant="slogan" tw="text-[18px]">
            Bella sebastian
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
    </div>
  )
}
export default DermatologistProfessional
