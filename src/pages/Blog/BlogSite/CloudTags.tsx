import tw, { styled } from 'twin.macro'

import TextTitle from 'components/TextTile/Title'

const BoxTags = styled.button(() => [
  tw`text-[14px] w-[82px] h-[26px] rounded-[50px] drop-shadow-2xl text-center border-[0.5px] border-slate-200 text-[#8B8B8B]`,
  tw`hocus:(scale-105 bg-white text-pink-400 border-pink-400)`,
])

const CloudTags = () => (
  <div tw="flex flex-col gap-16">
    {/* Recent Posts  */}
    <div tw="flex bg-white w-[350px] h-[274px] rounded-[25px] drop-shadow-[0px 25px 50px rgba(246, 247, 255, 1)]">
      <div tw="flex flex-col gap-8 justify-center mx-8">
        <TextTitle variant="title" tw="text-[#091156] ">
          Cloud Tags
        </TextTitle>
        <div tw="flex flex-col gap-2">
          <div tw="flex flex-row gap-2">
            <BoxTags>beauty</BoxTags>
            <BoxTags>cute</BoxTags>
            <BoxTags>skin</BoxTags>
          </div>
          {/* .  */}
          <div tw="flex flex-row gap-2">
            <BoxTags>grow</BoxTags>
            <BoxTags>style</BoxTags>
            <BoxTags>clinic</BoxTags>
          </div>
          <div tw="flex flex-row gap-2">
            <BoxTags>style</BoxTags>
            <BoxTags>great</BoxTags>
            <BoxTags>cute</BoxTags>
          </div>
        </div>
        {/* .  */}
      </div>
    </div>
  </div>
)

export default CloudTags
