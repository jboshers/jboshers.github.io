import React from 'react'
import Link from 'next/link'
import styles from './Verse.module.css'

const Verse = ({verse}) => {
  return (
    <div className={styles.verse} key={verse.id}>
      <p className={styles.english}>{verse.english}</p>
      <p className={styles.norse}>{verse.norse}</p>
      <p className={styles.citation}><Link href={`/havamal/${verse.id}`}><a>Havamal: {verse.id}</a></Link>, {verse.chapter}</p>
    </div>
  );
}

export default Verse
