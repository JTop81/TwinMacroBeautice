import tw, { styled } from 'twin.macro'

interface NavButtonProps {
  variant?: 'navButtonBgWhite' | 'navButtonBgColor'
}

const NavButton = styled.button(({ variant }: NavButtonProps) => [
  // The common button styles
  tw`text-base [font-weight: 500] [text-transform: none]`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-pink-400)`,

  // Use props to conditionally style your components
  variant === 'navButtonBgWhite' && tw` text-[#8B8B8B] `,

  variant === 'navButtonBgColor' && tw` text-[#D8DCFF] `,
])

export default NavButton
