import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './styles.module.css';
import {randomNumber} from '../../utils/utils'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Jeff Boshers | Project: {title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.grid}>
      <header className={styles.header}>
        <Link href="/havamal"><a className={styles.title}><h1 className={styles.logo}>Havamal</h1></a></Link>
        <nav className={styles.nav}>
          <Link href="/havamal/all">
            <a className={styles.menuLink}>Havamal</a>
          </Link>{' '}
    |{' '}
          <Link href={`/havamal/${randomNumber(1, 164)}`}>
            <a className={styles.menuLink}>Random</a>
          </Link>{' '}
        </nav>
      </header>
      <div className={styles.content}>
        {children}
      </div>

    </div>
  </div>
)

export default Layout
