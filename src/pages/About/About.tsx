import tw from 'twin.macro'
import Layout from 'layouts/layout'
import AboutSite from './AboutSite/AboutSite'
import ProfessionalTeams from 'components/ProfessionalTeam/ProfessionalTeam'
import BusinessSlogan from './AboutSite/BusinessSlogan/BusinessSlogan'
import VisionMission from './AboutSite/VisionMission/VisionMission'
import OurClients from './AboutSite/OurClients/OurClients'

const About = () => {
  return (
    <Layout>
      <AboutSite />
      <ProfessionalTeams />
      <BusinessSlogan />
      <VisionMission />
      <OurClients />
    </Layout>
  )
}

export default About
