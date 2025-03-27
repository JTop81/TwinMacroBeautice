import tw, { styled } from 'twin.macro'

interface PinkButtonProps {
  variant?:
    | 'contact'
    | 'moreDetailSlider'
    | 'learnMoreAboutUs'
    | 'sendMessageContactUs'
    | 'makeAnAppointmentGallery'
    | 'readMoreBlog'
}

const PinkButton = styled.button(({ variant }: PinkButtonProps) => [
  // The common button styles
  tw`px-8 py-2 border-2 [border-radius: 50px] border-pink-400 bg-pink-400 text-white transform duration-75 `,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 bg-white text-pink-400 border-pink-400)`,

  // Use props to conditionally style your components
  variant === 'contact' &&
    tw`bg-pink-400 text-white [font-weight: 600] [width: 158px] [height: 52px]`,
  variant === 'moreDetailSlider' &&
    tw`bg-pink-400 text-white [font-weight: 600] [width: 200px] [height: 58.36px]`,
  variant === 'learnMoreAboutUs' &&
    tw`bg-pink-400 text-white [font-weight: 600] [width: 200px] [height: 58.36px]`,
  variant === 'sendMessageContactUs' &&
    tw`bg-pink-400 text-white [font-weight: 600] [width: 248px] [height: 58px]`,
  variant === 'makeAnAppointmentGallery' &&
    tw`bg-pink-400 text-white [font-weight: 600] [width: 316px] [height: 58px]`,
  variant === 'readMoreBlog' &&
    tw`bg-pink-400 text-white [font-weight: 600] [width: 226px] [height: 58px]`,
])

export default PinkButton
