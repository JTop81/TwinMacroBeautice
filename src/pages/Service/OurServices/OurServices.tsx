import tw, { styled } from 'twin.macro'
import TextTitle from 'components/TextTile/Title'
import SquareImg1 from 'assets/unsplash_5TJ0Hoy5FLY.svg'
import SquareImg2 from 'assets/unsplash_pTrhfmj2jDA.svg'
import LongImg1 from 'assets/unsplash_ZOT2Mewzmh8.svg'
import LongImg2 from 'assets/unsplash_gzfIO69Q6eM.svg'
import Animation1 from 'assets/Animation1.svg'
import Animation2 from 'assets/Animation2.svg'
import Animation3 from 'assets/Animation3.svg'
import AngleDoubleRight from 'assets/angle-double-right.svg'

const BlueTextButton = styled.button(() => [
  // The common button styles
  tw`text-base text-[#091156] transform [font-weight: 600] [text-align: left]`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 bg-white text-pink-400 border-pink-400)`,

  // Use props to conditionally style your components
])
const OurServices = () => (
  <div tw="flex flex-col justify-center gap-y-4 pt-8">
    {/* Title  */}
    <div tw="flex flex-col flex-wrap gap-3 justify-center [text-align: center]">
      <TextTitle variant="title">Our Services</TextTitle>
      <TextTitle variant="slogan">We focus on your beauty</TextTitle>
      <TextTitle variant="desc">Lorem ipsum dolor sit amet</TextTitle>
    </div>
    {/* image  */}
    <div tw="flex flex-col gap-32">
      <div tw="flex flex-wrap gap-32 justify-center">
        <img src={SquareImg1} alt="SquareImg1" tw="max-md:hidden" />
        <img src={LongImg1} alt="LongImg1" />
      </div>
      <div tw="flex flex-wrap gap-32 justify-center">
        <img src={LongImg2} alt="LongImg2" />
        <img src={SquareImg2} alt="SquareImg2" />
        <img src={SquareImg1} alt="SquareImg1" tw="lg:hidden" />
      </div>
      {/* Animation  */}
      <div tw="flex flex-col gap-8 ">
        {/* Animation 1  */}
        <div tw="flex flex-wrap gap-32 justify-center mx-auto">
          <img src={Animation1} alt="Animation1" />
          <div tw="flex flex-col gap-6">
            <TextTitle variant="title">Beauty Consultation</TextTitle>
            <TextTitle variant="slogan">
              We services beauty
              <br /> consultation
            </TextTitle>
            <TextTitle variant="desc">
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Elit, quam suscipit purus donec
              <br /> amet. Egestas volutpat facilisi eu libero.
            </TextTitle>

            <BlueTextButton tw="container flex flex-row gap-3">
              <div>Make an Appointment</div>
              <img src={AngleDoubleRight} />
            </BlueTextButton>
          </div>
        </div>
        {/* Animation 2  */}
        <div tw="flex flex-wrap gap-32 justify-center mx-auto max-md:flex-col-reverse">
          <div tw="flex flex-col gap-6">
            <TextTitle variant="title">Skin Treatements</TextTitle>
            <TextTitle variant="slogan">
              Skin care and
              <br /> treatment by expert
            </TextTitle>
            <TextTitle variant="desc">
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Elit, quam suscipit purus donec
              <br /> amet. Egestas volutpat facilisi eu libero.
            </TextTitle>

            <BlueTextButton tw="container flex flex-row gap-3">
              <div>Make an Appointment</div>
              <img src={AngleDoubleRight} />
            </BlueTextButton>
          </div>
          <img src={Animation2} alt="Animation2" />
        </div>
        {/* Animation 3  */}
        <div tw="flex flex-wrap gap-32 justify-center mx-auto">
          <img src={Animation3} alt="Animation3" />
          <div tw="flex flex-col gap-6">
            <TextTitle variant="title">Beauty Product</TextTitle>
            <TextTitle variant="slogan">
              We present quality
              <br /> beauty products
            </TextTitle>
            <TextTitle variant="desc">
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Elit, quam suscipit purus donec
              <br /> amet. Egestas volutpat facilisi eu libero.
            </TextTitle>

            <BlueTextButton tw="container flex flex-row gap-3">
              <div>Make an Appointment</div>
              <img src={AngleDoubleRight} />
            </BlueTextButton>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default OurServices
