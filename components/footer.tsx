import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="colophon">
        <a href="/colophon">Colophon</a>
      </div>
      <div>
        <small className={styles.built}>Built with ♥ in <span className="text-fancy">Hilltown</span>.</small>
      </div>
      <div className="social">
        <a href="https://twitter.com/bowshears">Twitter</a> / <a href="https://linkedin.com/in/jeffboshers">Linkedin</a> / <a href="https://dribbble.com/boundbystars">Dribbble</a>
      </div>
    </footer>
  )
}

export default Footer
