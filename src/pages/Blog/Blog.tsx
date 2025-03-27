import Layout from 'layouts/layout'
import BlogSite from './BlogSite/BlogSite'
import BlogThumbnail from './BlogSite/BlogThumbnail'

const Blog = () => {
  return (
    <Layout>
      <BlogThumbnail />
      <BlogSite />
    </Layout>
  )
}

export default Blog
