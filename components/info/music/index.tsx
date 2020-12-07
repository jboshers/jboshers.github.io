import styles from './index.module.css'

const Album = ({ album }) => {
  return (
    <div className={styles.album}>
      <div>
        <img className={styles.albumImage} src={album.image[3]['#text']} />
      </div>
      <div className={styles.albumContent}>
        <div className={styles.albumTitle}>{album.name}</div>
        <div className={styles.artist}>{album.artist.name}</div>
      </div>
    </div>
  )
}

const Albums = ({ albums }) => {
  return (
    <div>
      <h5 className="text-fancy h3 sp-m-b-3">Currently Jamming</h5>
      <ul className="list">
        {albums.map((album, i) => (
          <li key={i}>
            <Album album={album} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Albums
