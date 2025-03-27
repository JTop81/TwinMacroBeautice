import tw, { styled } from 'twin.macro'

interface TextTitleProps {
  variant?:
    | 'title'
    | 'slogan'
    | 'desc'
    | 'blueTitle'
    | 'sloganWhite'
    | 'lightGrayDesc'
}

const TextTitle = styled.div(({ variant }: TextTitleProps) => [
  // The common button styles
  tw`[text-transform: none]`,

  // Use props to conditionally style your components
  variant === 'title' && tw`text-base [font-weight: 600] text-[#FF64AE]`,

  variant === 'slogan' && tw`text-4xl [font-weight: 600] text-[#091156]`,

  variant === 'desc' && tw`text-base [font-weight: 400] text-[#8B8B8B]`,

  variant === 'blueTitle' && tw`text-base [font-weight: 400] text-[#ABB4FF]`,

  variant === 'sloganWhite' && tw`text-4xl [font-weight: 600] text-[#FFFFFF]`,

  variant === 'lightGrayDesc' &&
    tw`text-base [font-weight: 400] text-[#CACACA]`,
])

export default TextTitle
