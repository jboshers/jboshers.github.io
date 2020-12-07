import Layout from '../../components/layout'

const IndexPage = () => (
  <Layout title="How this site was made">
    <article className="article">
      <div className="content">
        <p>This site is built upon good bones.</p>
        <p>The framework is NextJS. Everything is built in HTML, CSS, Javascript. More specifically PostCSS, HTML5, and React.</p>
        <p>Coding insights are powered by <a href="https://wakatime.com/" target="_blank" rel="noreferrer">Wakatime</a>.</p>
        <p>Musical insights are enabled by the powerful combo of <a href="https://last.fm" target="_blank" rel="noreferrer">lastfm</a>/<a href="https://spotify.com" target="_blank" rel="noreferrer">Spotify</a>.</p>
        <p>My reading list is powered by <a href="https://goodreads.com" target="_blank" rel="noreferrer">GoodReads</a>.</p>
        <p>Fonts included in this site are Quicksand*, Sansita Swashed*. Brandon Grotesque is also used a small amount.<br/><small>* Served from Google Fonts</small></p>
      </div>
    </article>
  </Layout>
)

export default IndexPage
