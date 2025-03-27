import tw from 'twin.macro'
import HomeNavButton from '../../Button/HomeButton'
import NavButton from '../../Button/NavButton'
import PinkButton from '../../Button/PinkButton'
import { NavLink } from 'react-router-dom'

const MainMenuBgWhite = () => (
  <div tw="flex flex-row flex-wrap justify-items-end gap-x-12 pl-32 pr-16 max-md:pl-0">
    <HomeNavButton variant="homeButtonBgWhite">
      <NavLink to="/">Home +</NavLink>
    </HomeNavButton>
    <NavButton variant="navButtonBgWhite">
      {' '}
      <NavLink to="/about">About</NavLink>
    </NavButton>
    <NavButton variant="navButtonBgWhite">
      {' '}
      <NavLink to="/service">Service</NavLink>
    </NavButton>
    <NavButton variant="navButtonBgWhite">
      {' '}
      <NavLink to="/gallery">Gallery</NavLink>
    </NavButton>
    <NavButton variant="navButtonBgWhite">
      {' '}
      <NavLink to="/team">Team</NavLink>
    </NavButton>
    <NavButton variant="navButtonBgWhite">
      {' '}
      <NavLink to="/blog">Blog</NavLink>
    </NavButton>
    <PinkButton variant="contact">
      {' '}
      <NavLink to="/contact">Contact</NavLink>
    </PinkButton>
  </div>
)
export default MainMenuBgWhite
