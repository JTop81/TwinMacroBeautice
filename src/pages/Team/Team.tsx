import AssistanceTeam from './TeamSite/AssistanceTeam'
import OurTestimonials from './TeamSite/OurTestimonials'
import TeamSlogan from './TeamSite/TeamSlogan'
import ProfessionalTeams from 'components/ProfessionalTeam/ProfessionalTeam'
import Layout from 'layouts/layout'

const Blog = () => {
  return (
    <Layout>
      <ProfessionalTeams />
      <AssistanceTeam />
      <TeamSlogan />
      <OurTestimonials />
    </Layout>
  )
}

export default Blog
