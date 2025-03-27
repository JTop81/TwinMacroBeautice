import tw from 'twin.macro'

import TextTitle from 'components/TextTile/Title'

const CategoriesPost = () => (
  <div tw="flex flex-col gap-16">
    {/* Recent Posts  */}
    <div tw="flex bg-white w-[350px] h-[250px] rounded-[25px] drop-shadow-[0px 25px 50px rgba(246, 247, 255, 1)]">
      <div tw="flex flex-col gap-8 justify-center mx-8">
        <TextTitle variant="title" tw="text-[#091156] ">
          Categories
        </TextTitle>
        <div tw="flex flex-col gap-2">
          <TextTitle
            variant="desc"
            tw="text-[14px] hocus:(scale-105 bg-white text-pink-400 border-pink-400)"
          >
            Consultation
          </TextTitle>
          <TextTitle
            variant="desc"
            tw="text-[14px] hocus:(scale-105 bg-white text-pink-400 border-pink-400)"
          >
            Beauty
          </TextTitle>
          <TextTitle
            variant="desc"
            tw="text-[14px] hocus:(scale-105 bg-white text-pink-400 border-pink-400)"
          >
            Treatments
          </TextTitle>
          <TextTitle
            variant="desc"
            tw="text-[14px] hocus:(scale-105 bg-white text-pink-400 border-pink-400)"
          >
            News
          </TextTitle>
        </div>
      </div>
    </div>
  </div>
)

export default CategoriesPost
