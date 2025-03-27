import GetTheQuota from './GallerySite/GetTheQuota'
import OurGallery from './GallerySite/OurGallery'
import ThumbnailVideoTour from './GallerySite/ThumbnailVideoTour'
import Layout from 'layouts/layout'

const Gallery = () => {
  return (
    <Layout>
      <OurGallery />
      <ThumbnailVideoTour />
      <GetTheQuota />
    </Layout>
  )
}

export default Gallery
