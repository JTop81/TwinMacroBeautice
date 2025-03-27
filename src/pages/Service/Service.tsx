import OurServices from './OurServices/OurServices'
import TreatmentVideo from './OurServices/TreatmentVideo'
import ServicesFAQ from './ServicesFAQ/ServicesFAQ'
import Layout from 'layouts/layout'

const Blog = () => {
  return (
    <Layout>
      <OurServices />
      <TreatmentVideo />
      <ServicesFAQ />
    </Layout>
  )
}

export default Blog
