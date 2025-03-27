import tw from 'twin.macro'
import TextTitle from '../TextTile/Title'
import DermatologistProfessional from './ProfessionalDermatologist'
import StylistProfessional from './ProfessionalStylist'
import SurgeonProfessional from './ProfessionalSurgeon'

const ProfessionalTeams = () => (
  <div tw="flex flex-col justify-center [row-gap: 5.5rem] [text-align: center]">
    <div tw="flex flex-col gap-y-5">
      <TextTitle variant="title">Professional Teams</TextTitle>
      <TextTitle variant="slogan">The Professional expert</TextTitle>
      <TextTitle variant="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </TextTitle>
    </div>
    <div tw="flex flex-row gap-[4.5rem] self-center max-lg:flex-col">
      <SurgeonProfessional />
      <DermatologistProfessional />
      <StylistProfessional />
    </div>
  </div>
)
export default ProfessionalTeams
