import tw from 'twin.macro'
import HomeNavButton from '../../Button/HomeButton'
import NavButton from '../../Button/NavButton'
import PinkButton from '../../Button/PinkButton'

const MainMenuBgColor = () => (
  <div tw="flex flex-row flex-wrap justify-items-end gap-x-16 pl-32 pr-16">
    <HomeNavButton variant="homeButtonBgColor">Home +</HomeNavButton>
    <NavButton variant="navButtonBgColor">About</NavButton>
    <NavButton variant="navButtonBgColor">Service</NavButton>
    <NavButton variant="navButtonBgColor">Gallery</NavButton>
    <NavButton variant="navButtonBgColor">Blog</NavButton>
    <PinkButton variant="contact">Contact</PinkButton>
  </div>
)
export default MainMenuBgColor
