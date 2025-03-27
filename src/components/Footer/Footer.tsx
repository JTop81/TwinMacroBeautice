import tw, { styled } from 'twin.macro'

import MainLogoBlue from '../Header/Logos/MainLogoWhite'
import FbColorBgIcon from '../Socialicons/FbColorBg'
import TwitterColorBgIcon from '../Socialicons/TwitterColorBg'
import LinkedinColorBgIcon from '../Socialicons/LinkedinColorBg'
import YoutubeColorBgIcon from '../Socialicons/YoutubeColorBg'
import InstagramColorBgIcon from '../Socialicons/InstagramColorBg'
import FooterBg from './FooterBg'
import CaretRight from './CaretRight'

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

const TypeTextAddress = styled.div(() => [
  tw`text-[14px] [font-weight: 500] italic text-[#D7DBFF] [text-align: left]`,
])

const TypeTextTile = styled.div(() => [
  tw`text-[18px] [font-weight: 600] text-[#D7DBFF] [text-align: left]`,
])

const TypeTextInfo = styled.div(() => [
  tw`text-base [font-weight: 400] text-[#D7DBFF] [text-align: left]`,
])

const Footer = () => (
  <div tw="flex-col inline-flex absolute justify-between max-md:bg-[#172176] max-md:[width: auto] max-md:[height: auto]  max-md:[padding-top: 20px]">
    <FooterBg tw="w-screen [background-size: contain] max-md:hidden" />
    <div tw="flex-col inline-flex pt-16 [margin-top: -500px] gap-5  max-md:[margin-top: 0] mx-auto">
      <div
        tw="flex flex-row flex-wrap justify-center mx-auto

      max-md:[margin-top: -110px]
      max-sm:[margin-top: 0]
      "
      >
        {/* Logo + address  */}
        <div tw="flex flex-col px-24 gap-4">
          {/* Logo  */}
          <MainLogoBlue />
          {/* Logo  */}

          <TypeTextInfo tw="px-10 [text-align: left]">
            <span tw="font-bold">Beautice</span> is a Beauty Clinic WordPress
            Theme.
          </TypeTextInfo>
          <div tw="flex flex-col gap-1 px-10">
            <TypeTextAddress>
              Baker Steet 101, NY, United States.
            </TypeTextAddress>
            <div tw="flex flex-row flex-wrap ">
              <TypeTextAddress tw=" mr-16">+521 569 8966.</TypeTextAddress>
              <TypeTextAddress>mail@company.com.</TypeTextAddress>
            </div>
          </div>
        </div>
        {/* Logo + address  */}
        {/* .............. */}
        <div tw="flex flex-row px-10 gap-x-72 max-md:gap-x-36">
          {/* Page  */}
          <div tw="flex flex-col gap-6">
            <TypeTextTile>Page</TypeTextTile>
            <div tw="flex flex-col gap-2">
              <div tw="flex flex-row gap-1 ">
                <CaretRight />
                <TypeTextInfo>Home</TypeTextInfo>
              </div>
              <div tw="flex flex-row gap-1 ">
                <CaretRight />
                <TypeTextInfo>About</TypeTextInfo>
              </div>
              <div tw="flex flex-row gap-1 ">
                <CaretRight />
                <TypeTextInfo>Services</TypeTextInfo>
              </div>
              <div tw="flex flex-row gap-1 ">
                <CaretRight />
                <TypeTextInfo>Gallery</TypeTextInfo>
              </div>
              <div tw="flex flex-row gap-1 ">
                <CaretRight />
                <TypeTextInfo>Team</TypeTextInfo>
              </div>
            </div>
          </div>
          {/* page  */}
          {/* .... */}
          {/* Infomation  */}
          <div tw="flex flex-col gap-6">
            <TypeTextTile>Infomation</TypeTextTile>
            <div tw="flex flex-col gap-2">
              <div tw="flex flex-row gap-1 ">
                <CaretRight />
                <TypeTextInfo>Terms & conditions</TypeTextInfo>
              </div>
              <div tw="flex flex-row gap-1 ">
                <CaretRight />
                <TypeTextInfo>Privacy policy</TypeTextInfo>
              </div>
              <div tw="flex flex-row gap-1 ">
                <CaretRight />
                <TypeTextInfo>Blog</TypeTextInfo>
              </div>
              <div tw="flex flex-row gap-1 ">
                <CaretRight />
                <TypeTextInfo>Contact</TypeTextInfo>
              </div>
            </div>
          </div>
          {/* Infomation  */}
        </div>
      </div>
      {/* scroll to top  */}
      <div tw="self-end">
        <button onClick={scrollToTop}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="36" rx="5" fill="#FF64AE" />
            <path
              d="M11.3519 19.1775L10.5715 18.3971C10.241 18.0666 10.241 17.5322 10.5715 17.2053L17.4023 10.3709C17.7328 10.0404 18.2672 10.0404 18.5941 10.3709L25.425 17.2018C25.7554 17.5322 25.7554 18.0666 25.425 18.3936L24.6445 19.174C24.3105 19.508 23.7656 19.501 23.4386 19.16L19.4062 14.9271V25.0311C19.4062 25.4986 19.0301 25.8748 18.5625 25.8748H17.4375C16.9699 25.8748 16.5937 25.4986 16.5937 25.0311V14.9271L12.5578 19.1635C12.2308 19.508 11.6859 19.515 11.3519 19.1775Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {/* Scroll to top  */}
      {/* . 
      . 
      .  */}
      {/* Social icon + copyright  */}
      <div tw="flex flex-row flex-wrap gap-4 justify-around [text-align: center]">
        <div tw=" max-md:w-full ">
          <div tw="flex flex-row gap-10 max-md:place-content-center">
            <FbColorBgIcon />
            <TwitterColorBgIcon />
            <LinkedinColorBgIcon />
            <YoutubeColorBgIcon />
            <InstagramColorBgIcon />
          </div>
        </div>
        <TypeTextInfo tw="">
          © AltDesain Studio 2021 - All right reserved.
        </TypeTextInfo>
      </div>
    </div>
  </div>
)
export default Footer
