import tw from 'twin.macro'
import TextTitle from 'components/TextTile/Title'
import TestimonialsAvatar1 from 'assets/unsplash_Z5g_6TLS6Ho.svg'
import Star from 'assets/star.svg'
import ArrowLeft from 'assets/arrow-left.svg'
import ArrowRight from 'assets/arrow-right.svg'

const OurTestimonials = () => (
  <div tw="flex flex-col gap-16 justify-center self-center mx-1 [text-align: center]">
    <div tw="flex flex-col gap-4 justify-center">
      <TextTitle variant="title">Our Testimonials</TextTitle>
      <TextTitle variant="slogan">What our customer says</TextTitle>
      <TextTitle variant="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </TextTitle>
    </div>
    <div tw="flex flex-col gap-4 justify-center">
      <div tw="self-center">
        <img src={TestimonialsAvatar1} />
      </div>
      <div tw="flex flex-row gap-x-8 justify-center">
        <div tw="self-center">
          <img src={ArrowLeft} />
        </div>
        <TextTitle variant="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          <br />
          metus tincidunt laoreet ultricies condimentum ac integer
          <br /> aliquam. Lorem diam dignissim amet fermentum elementum dui
          <br /> dui. Aliquam sem elementum morbi imperdiet suscipit erat ut.
          <br />
          Purus volutpat in turpis gravida blandit.
        </TextTitle>
        <div tw="self-center">
          <img src={ArrowRight} />
        </div>
      </div>
      <div tw="flex flex-row gap-4 justify-center">
        <img src={Star} />
        <img src={Star} />
        <img src={Star} />
        <img src={Star} />
        <img src={Star} />
      </div>
    </div>
  </div>
)

export default OurTestimonials
