import tw from 'twin.macro'
import TextTitle from 'components/TextTile/Title'
import ImgTeam1 from 'assets/unsplash_byGTytEGjBo.svg'
import ImgTeam2 from 'assets/unsplash_8YG31Xn4dSw.svg'
import ImgTeam3 from 'assets/unsplash_Fsgzm8N0hIY.svg'

const AssistanceTeam = () => (
  <div tw="flex flex-col gap-16">
    <div tw="flex flex-col gap-4 [text-align: center] justify-center self-center">
      <TextTitle variant="title">Assistance Team</TextTitle>
      <TextTitle variant="slogan">Meet the pro assistance</TextTitle>
      <TextTitle variant="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </TextTitle>
    </div>
    <div tw="flex flex-col gap-14 justify-center mx-4 self-center">
      <div tw="flex flex-wrap flex-row justify-center gap-x-16 max-md:gap-8">
        <div>
          <img src={ImgTeam1} />
        </div>
        <div tw="flex flex-col gap-4 self-center">
          <TextTitle variant="slogan" tw="text-[18px]">
            Lina Gustav /{' '}
            <span tw="text-[14px] [font-weight: 400] italic text-[#8B8B8B]">
              Pharmacist
            </span>
          </TextTitle>
          <TextTitle variant="desc">
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Nam id magnis at placerat
            <br /> pulvinar euismod neque.
          </TextTitle>
        </div>
      </div>
      <div tw="flex flex-wrap flex-row justify-center gap-x-16 max-md:gap-8">
        <div>
          <img src={ImgTeam2} />
        </div>
        <div tw="flex flex-col gap-4 self-center">
          <TextTitle variant="slogan" tw="text-[18px]">
            Adam White /{' '}
            <span tw="text-[14px] [font-weight: 400] italic text-[#8B8B8B]">
              Finance
            </span>
          </TextTitle>
          <TextTitle variant="desc">
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Nam id magnis at placerat
            <br /> pulvinar euismod neque.
          </TextTitle>
        </div>
      </div>
      <div tw="flex flex-wrap flex-row justify-center gap-x-16 max-md:gap-8">
        <div>
          <img src={ImgTeam3} />
        </div>
        <div tw="flex flex-col gap-4 self-center">
          <TextTitle variant="slogan" tw="text-[18px]">
            Jane Doe /{' '}
            <span tw="text-[14px] [font-weight: 400] italic text-[#8B8B8B]">
              Marketer
            </span>
          </TextTitle>
          <TextTitle variant="desc">
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Nam id magnis at placerat
            <br /> pulvinar euismod neque.
          </TextTitle>
        </div>
      </div>
    </div>
  </div>
)

export default AssistanceTeam
