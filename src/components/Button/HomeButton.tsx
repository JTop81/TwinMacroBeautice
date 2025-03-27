import tw, { styled } from 'twin.macro'

interface HomeButtonProps {
  variant?: 'homeButtonBgWhite' | 'homeButtonBgColor'
}

const HomeNavButton = styled.button(({ variant }: HomeButtonProps) => [
  // The common button styles
  tw`text-base  [font-weight: 500] [text-transform: none]`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-pink-400)`,

  // Use props to conditionally style your components
  variant === 'homeButtonBgWhite' && tw` text-[#41487F] `,

  variant === 'homeButtonBgColor' && tw` text-[#FFFFFF] `,
])

export default HomeNavButton
