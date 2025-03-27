import tw from 'twin.macro'
import TextTitle from 'components/TextTile/Title'
import BeautyConsultation from './BeautyConsultation'
import BeautyProduct from './BeautyProduct'
import SkinTreatments from './SkinTreatments'

const MainServicesHome1 = () => (
  <div tw="flex flex-col justify-center gap-y-6 [margin-top: -300px] [text-align: center]">
    <div tw="flex flex-col gap-y-5">
      <TextTitle variant="title">Main Sevices</TextTitle>
      <TextTitle variant="slogan">
        Learn services to focus <br /> on your beauty
      </TextTitle>
      <TextTitle variant="desc">
        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
        Non parturient <br /> amet, feugiat tellus sagittis, scelerisque eget
        nulla turpis.
      </TextTitle>
    </div>
    <div tw="flex flex-row gap-x-2 self-center max-lg:flex-col">
      <BeautyConsultation />
      <SkinTreatments />
      <BeautyProduct />
    </div>
  </div>
)
export default MainServicesHome1
