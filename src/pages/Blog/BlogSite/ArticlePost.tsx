import tw, { styled } from 'twin.macro'
import ImgArticle1 from 'assets/unsplash_3ewkNkfJj2k.svg'
import ImgArticle2 from 'assets/unsplash_7tDGb3HrITg.svg'
import ImgArticle3 from 'assets/unsplash_0_McYfdyEDA.svg'
import CaretRight from 'assets/caret-right.svg'
import FolderIcon from 'assets/folder.svg'
import TextTitle from 'components/TextTile/Title'
import PinkButton from 'components/Button/PinkButton'

const BoxDesc = styled.div(() => [
  tw`bg-white rounded-b-lg w-auto h-auto drop-shadow-[10px 13px 80px rgba(242, 244, 255, 1)] py-8 px-16 `,
])

const ArticlePost = () => (
  <div tw="flex flex-col gap-16">
    {/* Article 1 */}
    <div tw="flex flex-col">
      <img src={ImgArticle1} />
      <BoxDesc tw="flex flex-col gap-8">
        <div tw="flex flex-row gap-4">
          <img src={FolderIcon} />
          <TextTitle variant="title" tw="my-auto">
            Consultation
          </TextTitle>
        </div>
        <TextTitle variant="slogan">
          How much does a consultation
          <br /> cost at our clinic?
        </TextTitle>
        <TextTitle variant="desc">
          A wonderful serenity has taken possession of my entire soul, <br />
          like these sweet mornings of spring which I enjoy with my
          <br /> whole heart. I am alone, and feel the charm of existence in
          <br />
          this spot, which was created for the…
        </TextTitle>
        <PinkButton
          variant="readMoreBlog"
          tw="flex flex-row gap-2 place-content-center justify-center items-center"
        >
          <div tw="[padding-left: 10px]">Read more</div>
          <img src={CaretRight} />
        </PinkButton>
      </BoxDesc>
    </div>

    {/* Article 2 */}

    <div tw="flex flex-col">
      <img src={ImgArticle2} />
      <BoxDesc tw="flex flex-col gap-8">
        <div tw="flex flex-row gap-4">
          <img src={FolderIcon} />
          <TextTitle variant="title" tw="my-auto">
            Beauty
          </TextTitle>
        </div>
        <TextTitle variant="slogan">
          Watch out! don't choose the
          <br /> wrong beauty product
        </TextTitle>
        <TextTitle variant="desc">
          A wonderful serenity has taken possession of my entire soul,
          <br /> like these sweet mornings of spring which I enjoy with my
          <br />
          whole heart. I am alone, and feel the charm of existence in
          <br /> this spot, which was created for the…
        </TextTitle>
        <PinkButton
          variant="readMoreBlog"
          tw="flex flex-row gap-2 place-content-center justify-center items-center"
        >
          <div tw="[padding-left: 10px]">Read more</div>
          <img src={CaretRight} />
        </PinkButton>
      </BoxDesc>
    </div>

    {/* Article 3 */}

    <div tw="flex flex-col">
      <img src={ImgArticle3} />
      <BoxDesc tw="flex flex-col gap-8">
        <div tw="flex flex-row gap-4">
          <img src={FolderIcon} />
          <TextTitle variant="title" tw="my-auto">
            Treatments
          </TextTitle>
        </div>
        <TextTitle variant="slogan">
          About skin care you need to
          <br /> know
        </TextTitle>
        <TextTitle variant="desc">
          A wonderful serenity has taken possession of my entire soul,
          <br /> like these sweet mornings of spring which I enjoy with my
          <br />
          whole heart. I am alone, and feel the charm of existence in
          <br /> this spot, which was created for the…
        </TextTitle>
        <PinkButton
          variant="readMoreBlog"
          tw="flex flex-row gap-2 place-content-center justify-center items-center"
        >
          <div tw="[padding-left: 10px]">Read more</div>
          <img src={CaretRight} />
        </PinkButton>
      </BoxDesc>
    </div>
  </div>
)

export default ArticlePost
