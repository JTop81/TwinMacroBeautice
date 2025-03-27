import tw, { css, styled } from 'twin.macro'
import PinkButton from 'components/Button/PinkButton'
import AnimationSlider from './AnimationSlider'
import SliderButton from './SliderButton'

const MainSlider = () => (
  <div tw="grid grid-rows-2 justify-center pt-8">
    <div tw="flex flex-row max-md:flex-col ">
      {/* Title and Desc  */}
      <div tw="[width: 50%] grid grid-rows-3 pl-8">
        <div tw="text-5xl text-[#091156] [font-weight: 600]">
          Clinic & beauty <br /> consultant
        </div>
        <div tw="text-base text-[#091156] [font-weight: 500]">
          It is a long established fact that a reader will be <br /> by the
          readable content of a page.
        </div>
        <div>
          <PinkButton variant="moreDetailSlider">More Details</PinkButton>
        </div>
      </div>
      {/* Title and Desc  */}
      <div>
        <AnimationSlider />
      </div>
    </div>

    <div>
      <SliderButton />
    </div>
  </div>
)

export default MainSlider
