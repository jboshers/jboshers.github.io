import React from 'react'
import WolfDavidBowie from '../public/logo.svg';
import Link from 'next/link'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a title="Back to the homepage">
          <WolfDavidBowie className={styles.logo} alt="Wolf David Bowie Logo" width={70} height={70} />
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/articles">
          <a>Articles</a>
        </Link>{' '}
        <Link href="/projects">
          <a>Projects</a>
        </Link>{' '}
        <Link href="/info">
          <a>Info</a>
        </Link>{' '}
      </nav>
    </header>
  )
}

export default Header
