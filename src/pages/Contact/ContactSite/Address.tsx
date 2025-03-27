import tw from 'twin.macro'
import React from 'react'
import MapMaker from 'assets/map-marker-alt.svg'
import TextTitle from 'components/TextTile/Title'

const AddressContact: React.FC = () => {
  return (
    <div tw="flex flex-none flex-col gap-y-3 justify-center [text-align: center] place-content-center">
      <div tw="mx-auto">
        <img
          src={MapMaker}
          alt="MapMaker"
          tw="[align-content: center] justify-items-center justify-center place-content-center"
        />
      </div>
      <div tw="flex-col">
        <TextTitle variant="title" tw="">
          Address
        </TextTitle>

        <TextTitle variant="slogan" tw="text-[18px]">
          101 Baker Street, NY
        </TextTitle>

        <TextTitle variant="desc" tw="text-[14px]">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit ut <br /> aliquam, purus sit
        </TextTitle>
      </div>
    </div>
  )
}
export default AddressContact
