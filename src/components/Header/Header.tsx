import tw from 'twin.macro'
import MainLogoBlue from './Logos/MainLogoBlue'
import MainMenuBgWhite from './MainMenu/MainMenuBgWhite'

const Header = () => (
  <div tw="flex flex-row flex-wrap place-items-center pb-0 mt-4 lg:justify-center">
    {/* Logo header  */}
    <div tw="flex-none justify-items-start mr-32">
      <MainLogoBlue />
    </div>
    {/* Logo Header  */}
    {/* /// */}
    {/* Navigation  */}
    <div tw="flex justify-end ">
      {' '}
      <MainMenuBgWhite />
    </div>
  </div>
)

export default Header
