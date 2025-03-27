import ContactUsContactSite from './ContactSite/MainContactUsContactSite'
import Map from 'assets/map.svg'
import GetInTouch from './ContactSite/GetInTouch'
import tw from 'twin.macro'
import Layout from 'layouts/layout'

const Contact = () => {
  return (
    <Layout>
      <ContactUsContactSite />
      <img src={Map} tw="mx-auto justify-center" />
      <GetInTouch />
    </Layout>
  )
}

export default Contact
