import tw from 'twin.macro'

import TextTitle from 'components/TextTile/Title'
import PinkButton from 'components/Button/PinkButton'

const GetTheQuota = () => (
  <div tw="flex flex-row flex-wrap  gap-8 mx-auto">
    <div tw="flex flex-col gap-4">
      <TextTitle variant="title">Get The Quota</TextTitle>
      <TextTitle variant="slogan">
        Want to be handled by our
        <br /> professional team immediately?
      </TextTitle>
      <TextTitle variant="desc">
        Id dui erat sed quam tellus in purus. Pellentesque congue
        <br /> fringilla cras tellus enim.
      </TextTitle>
    </div>
    <PinkButton variant="makeAnAppointmentGallery">
      Make an Appointment
    </PinkButton>
  </div>
)
export default GetTheQuota
