import tw, { styled } from 'twin.macro'
import Search from 'assets/search.svg'
import TextTitle from 'components/TextTile/Title'
import RecentPost from './RecentPosts'
import CategoriesPost from './CategoriesPost'
import CloudTags from './CloudTags'
import SocialConnect from './SocialConnect'
import ArticlePost from './ArticlePost'

const BlogSite = () => (
  <div tw="flex flex-col gap-16">
    <div tw="flex flex-row gap-4 mx-auto max-md:flex-col-reverse max-md:w-screen max-md:px-2 max-md:items-center">
      {/* Main blog  */}
      <ArticlePost />
      {/* Main blog  */}
      {/* .
        . 
        .  */}
      {/* Search + social  */}
      <div tw="flex flex-col gap-16">
        {/* Search  */}
        <div tw="flex flex-row  [border-radius: 50px 50px 50px 50px] drop-shadow-[0px 25px 50px rgba(242, 244, 255, 1)]">
          <input
            type="text"
            name="search"
            placeholder="Search here..."
            tw="pl-4 w-[274px] h-[65px] [border-radius: 50px 0px 0px 50px]"
          />
          <button tw="bg-[#172176] [border-radius: 0px 50px 50px 0px]">
            <img
              src={Search}
              tw="px-5 justify-center items-center place-content-center place-items-center py-5"
            />
          </button>
        </div>

        {/* Recent Posts  */}
        <RecentPost />
        <CategoriesPost />
        <CloudTags />
        <SocialConnect />
      </div>
    </div>
    {/* pagination */}
    <div tw="flex flex-row self-center justify-center gap-4 content-center place-content-center items-center place-items-center">
      <TextTitle
        variant="desc"
        tw="text-[#E6E9FF] bg-[#172176] [border-radius: 100%] w-[35px] h-[35px] text-center items-center py-1"
      >
        1
      </TextTitle>
      <TextTitle variant="desc">2</TextTitle>
      <TextTitle variant="desc">3</TextTitle>
    </div>
  </div>
)

export default BlogSite
