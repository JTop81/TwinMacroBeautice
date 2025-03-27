import tw from 'twin.macro'

import TextTitle from 'components/TextTile/Title'
import ThumbnailAboutUs from './ThumbnailAboutUs'
import NavButton from 'components/Button/NavButton'
import PinkButton from 'components/Button/PinkButton'

const AboutUs = () => (
  <div tw="flex flex-wrap gap-y-6 w-full justify-center">
    <div tw="flex flex-col gap-y-5 ">
      <div tw="flex flex-col gap-y-5 pl-8">
        <TextTitle variant="title" tw="[text-align: left]">
          About Us
        </TextTitle>
        <TextTitle variant="slogan" tw="[text-align: left]">
          We are the best beauty clinic
        </TextTitle>
        <TextTitle variant="desc" tw="[text-align: left]">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit,
          quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu
          libero. Nunc, <br />
          ipsum ornare mauris sit quam quis enim. Varius <br /> tellus in
          suspendisse placerat. <br /> <br /> Id dui erat sed quam tellus in
          purus. Pellentesque <br />
          congue fringilla cras tellus enim.
        </TextTitle>
      </div>
      {/* Button  */}
      <div tw="flex flex-row pl-8 max-md:flex-col">
        <PinkButton variant="learnMoreAboutUs">Learn More</PinkButton>
        <NavButton tw="flex flex-row pl-16 place-content-center max-md:pl-0 max-md:place-content-start">
          <svg
            width="49"
            height="50"
            viewBox="0 0 49 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: '10px' }}
          >
            <circle cx="24.5" cy="24.9382" r="24.5" fill="#091156" />
            <path
              d="M32.1167 23.6145C33.45 24.3843 33.45 26.3088 32.1167 27.0786L22.8042 32.4551C21.4708 33.2249 19.8042 32.2627 19.8042 30.7231L19.8042 19.9699C19.8042 18.4303 21.4708 17.4681 22.8042 18.2379L32.1167 23.6145Z"
              fill="white"
            />
          </svg>
          <NavButton
            variant="navButtonBgWhite"
            tw="justify-center [text-align: center] content-center mt-6 pl-4"
          >
            Watch Video
          </NavButton>
        </NavButton>
      </div>
    </div>
    <ThumbnailAboutUs tw="items-center pl-8" />
  </div>
)
export default AboutUs
