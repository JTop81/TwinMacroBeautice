import React, { ReactNode } from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import tw from 'twin.macro'


interface LayoutProps {
  children: ReactNode
}
const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col h-screen w-screen max-w-full [font-family: Poppins]`,
    // hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div css={styles.container({ hasBackground: true })}>
      <div tw="flex flex-col gap-16">
        <Header />
        <div tw="flex flex-col gap-16">
          {children}
        </div>
        <div tw="container w-screen">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
