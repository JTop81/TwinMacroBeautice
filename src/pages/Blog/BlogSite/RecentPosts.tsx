import tw, { styled } from 'twin.macro'

import RecentPost1 from 'assets/unsplash_xayCTz6N2nM.svg'
import RecentPost2 from 'assets/unsplash_DiJKOYIiNmQ.svg'
import RecentPost3 from 'assets/unsplash_yfmjALh1S6s.svg'

import TextTitle from 'components/TextTile/Title'

const RecentPost = () => (
  <div tw="flex flex-col gap-16">
    {/* Recent Posts  */}
    <div tw="flex bg-white w-[350px] h-[471px] rounded-[25px] drop-shadow-[0px 25px 50px rgba(246, 247, 255, 1)]">
      <div tw="flex flex-col gap-8 justify-center mx-8">
        <TextTitle variant="title" tw="text-[#091156] ">
          Recent Posts
        </TextTitle>
        {/* Recent Post 1  */}
        <div tw="flex flex-row gap-4 items-center justify-center">
          <div>
            <img src={RecentPost1} tw="" />
          </div>
          <div tw="flex flex-col gap-1">
            <TextTitle variant="title" tw="text-[14px] my-auto">
              01 jan 2021
            </TextTitle>
            <TextTitle variant="desc" tw="text-[12px] [line-height: 18px]">
              Lorem ipsum dolor sit
              <br /> amet, consectetur
              <br /> adipiscing.
            </TextTitle>
          </div>
        </div>
        {/* Recent Post 2  */}
        <div tw="flex flex-row gap-4 items-center justify-center">
          <div>
            <img src={RecentPost2} tw="" />
          </div>
          <div tw="flex flex-col gap-1">
            <TextTitle variant="title" tw="text-[14px] my-auto">
              01 jan 2021
            </TextTitle>
            <TextTitle variant="desc" tw="text-[12px] [line-height: 18px]">
              Lorem ipsum dolor sit
              <br /> amet, consectetur
              <br /> adipiscing.
            </TextTitle>
          </div>
        </div>
        {/* Recent Post 3  */}
        <div tw="flex flex-row gap-4 items-center justify-center">
          <div>
            <img src={RecentPost3} tw="" />
          </div>
          <div tw="flex flex-col gap-1">
            <TextTitle variant="title" tw="text-[14px] my-auto">
              01 jan 2021
            </TextTitle>
            <TextTitle variant="desc" tw="text-[12px] [line-height: 18px]">
              Lorem ipsum dolor sit
              <br /> amet, consectetur
              <br /> adipiscing.
            </TextTitle>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default RecentPost
