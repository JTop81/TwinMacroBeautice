import tw from 'twin.macro'
import Layout from 'layouts/layout'
import MainSlider from './MainSlider/MainSlider'
import MainServicesHome1 from './MainServicesHome/MainServicesHome1'
import AboutUs from './AboutUs/AboutUs'
import ProfessionalTeams from 'components/ProfessionalTeam/ProfessionalTeam'
import ContactUs from 'components/ContactUs/ContactUs'

const Home = () => {
  return (
    <Layout>
      <MainSlider />
      <MainServicesHome1 />
      <AboutUs />
      <ProfessionalTeams />
      <ContactUs />
    </Layout>
  )
}

export default Home
