import tw from 'twin.macro'

import TextTitle from 'components/TextTile/Title'
import AngleUp from 'assets/angle-up.svg'
import AngleDown from 'assets/angle-down.svg'

const ServicesFAQ = () => (
  <div tw="flex flex-col gap-y-5 justify-center max-md:mx-2 max-w-[1440px] mx-auto">
    <div tw="flex flex-col gap-3 justify-center [text-align: center]">
      <TextTitle variant="slogan" tw="justify-center">
        Services FAQ’s
      </TextTitle>
      <div tw="self-center">
        <svg
          width="40"
          height="5"
          viewBox="0 0 40 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2.5"
            y1="2.5"
            x2="37.5"
            y2="2.5"
            stroke="#FF64AE"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
    <div tw="flex flex-col gap-3 mx-64 max-md:mx-auto max-sm:mx-3">
      <div tw="flex flex-col gap-5 ">
        <div tw="flex flex-row">
          <TextTitle variant="slogan" tw="text-base [width: 97.5%]">
            Is beauty consultation handled thoroughly?
          </TextTitle>
          <div tw="right-0">
            <img src={AngleUp} />
          </div>
        </div>
        <div tw="flex bg-[#F6F7FF] rounded-b-lg text-[14px] [font-weight: 400] italic text-[#8B8B8B] h-40 place-content-center">
          <div tw="my-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus
            <br /> venenatis, lectus magna fringilla urna
            <br />
            <br /> porttitor rhoncus dolor purus non enim praesent elementum
            facilisis leo, vel fringilla est
            <br /> ullamcorper eget nulla
          </div>
        </div>
      </div>
      <div tw="flex flex-row">
        <TextTitle variant="slogan" tw="text-base [width: 99%]">
          Can I be beautiful in an instant time?
        </TextTitle>
        <div tw="right-0">
          <img src={AngleDown} />
        </div>
      </div>
      <div tw="flex flex-row">
        <TextTitle variant="slogan" tw="text-base [width: 99%]">
          Are there any side effects to the treatment methods or treatments at
          this clinic?
        </TextTitle>
        <div tw="right-0">
          <img src={AngleDown} />
        </div>
      </div>
      <div tw="flex flex-row">
        <TextTitle variant="slogan" tw="text-base [width: 99%]">
          Do professionals have accreditation in their respective fields?
        </TextTitle>
        <div tw="right-0">
          <img src={AngleDown} />
        </div>
      </div>
    </div>
  </div>
)
export default ServicesFAQ
