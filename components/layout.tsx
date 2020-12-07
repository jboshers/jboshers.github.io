import React, { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
  showFooter?: boolean
}

const Layout = ({ children, title = 'Maker, Builder, Human', showFooter = true }: Props) => (
  <div className="page-grid">
    <Head>
      <title>Jeff Boshers | {title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Sansita+Swashed:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Head>
    <Header />
    <main className='main'>
      {children}
    </main>
    { showFooter && <Footer /> }
  </div>
)

export default Layout
