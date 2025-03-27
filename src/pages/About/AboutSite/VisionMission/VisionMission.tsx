import tw from 'twin.macro'
import TextTitle from 'components/TextTile/Title'
import AnimationVision from './VisionAnimation'
import AnimationMission from './MissionAnimation'

const VisionMission = () => (
  <div tw="flex flex-col gap-y-4 mx-auto ">
    <div tw="flex flex-row flex-wrap  gap-x-3 justify-center max-md:flex-col max-md:gap-y-3">
      <AnimationVision />
      <div tw="flex flex-col flex-wrap gap-2 my-auto mx-4">
        <TextTitle variant="title">Our Vision</TextTitle>
        <TextTitle variant="slogan">Be the best and go international</TextTitle>
        <TextTitle variant="desc">
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit. Elit, quam suscipit purus donec
          <br /> amet. Egestas volutpat facilisi eu libero.
          <br />
          <br /> Nunc, ipsum ornare mauris sit quam quis enim.
          <br /> Varius tellus in suspendisse placerat.
        </TextTitle>
      </div>
    </div>
    <div tw="flex flex-row flex-wrap gap-x-3 justify-center max-md:flex-col max-md:gap-y-3">
      <div tw="flex flex-col flex-wrap gap-2 my-auto mx-4">
        <TextTitle variant="title">Our Mission</TextTitle>
        <TextTitle variant="slogan">
          Special & premium service
          <br /> to any clients
        </TextTitle>
        <TextTitle variant="desc">
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit. Elit, quam suscipit purus donec
          <br /> amet. Egestas volutpat facilisi eu libero.
          <br />
          <br /> Nunc, ipsum ornare mauris sit quam quis enim.
          <br /> Varius tellus in suspendisse placerat.
        </TextTitle>
      </div>
      <AnimationMission />
    </div>
  </div>
)
export default VisionMission
