import Layout from '../../components/layout'
import { GetServerSideProps } from 'next'
import xml2js from 'xml2js'
import Music from '../../components/info/music'
import Wakatime from '../../components/info/wakatime'
import Books from '../../components/info/books'
import Stats from '../../components/info/stats'
import Level from '../../components/info/level'

const IndexPage = ({ music, wakatime, books }) => (
  <Layout title="Jeff Boshers | All About Jeff">
    <article>
      <section className="section section__large theme__soft-pink">
        <div className="container">
          <h1 className="text-fancy section--heading">All About Me</h1>
          <div className="media media--center">
            <img className="image__slightly-round" src="/me.jpeg" alt="My big dumb face"/>
            <div className="media-body">
              <h2 className="text-fancy h1 sp-m-b-3">Show & Tell</h2>
              <p>I am designer and developer. Most folks call me LunchBox, or LB. I&apos;m a digital creator and maker. I guess if you had to put a label on it, I&apos;m a front end developer. I love coming up with ideas and building them. From time to time I help others flesh out their ideas.</p>
              <p>I&apos;m old school. I coded my first site in the early oughts. Tables were still cool. CSS was just a garden. Phones still flipped. Get off my lawn.</p>
              <p>Before making the plunge to full-time code monkey, I worked normal everyday jobs. I&apos;ve worked in a Chinese restaurant and then an adult bookstore, and those were just some of the highlights. I freelanced for a while, it was okay.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section__large theme__soft-cyan">
        <div className="container">
          <div className="grid">
            <Music albums={music.topalbums.album} />
            <Books books={books} />
          </div>
        </div>
      </section>
      <section className="section section__large theme__soft-lime">
        <div className="container">
          <div className="grid">
            <div>
              <h2 className="text-fancy h1 sp-m-b-3">Nerd Stats</h2>
              <Stats />
            </div>
            <div>
              <h2 className="text-fancy h1 sp-m-b-3">Current Level</h2>
              <Level />
            </div>
          </div>
        </div>
      </section>
      <section className="section section__large theme__soft-pink">
        <div className="container">
          <div className="media media__reverse">
            <div className="media-body">
              <h2 className="text-fancy h1 sp-m-b-3">Well Whatcha Workin&apos; On?</h2>
              <p>On any given day I move around between a lot of projects...</p>
              <p>During the day, I work at <a href="https://codescience.com">Codescience</a> as a UI Engineer. All of the projects are built on top of the Salesforce platform.</p>
              <p>I freelance quite a bit. Those projects could be Ruby, React, or even a bit of PHP. I use Wakatime to keep track of what I work on, on a week-to-week basis.</p>
            </div>
            <Wakatime data={wakatime} />
          </div>
        </div>
      </section>
    </article>
  </Layout>
)

export default IndexPage

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const lastfm = await fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=boundbystars&limit=3&period=7day&api_key=abcd82a17cd358c1030c8798481f8106&format=json')
  const music = await lastfm.json()
  const waka = await fetch('https://wakatime.com/share/@lunchbox/23ad4d3e-1e2c-4ac8-bb5c-b016564883eb.json')
  const wt = await waka.json()
  const wakatime = {
    labels: [],
    series: []
  };
  wt.data.map(d => {
    wakatime.labels = [...wakatime.labels, d.name];
    wakatime.series = [...wakatime.series, d.percent > 1 ? d.percent : 0 ];
  })
  const goodreads = await fetch('https://www.goodreads.com/review/list/3644808.xml?key=R5jBSwGrgvsPr96ZozxCg&v=2&shelf=currently-reading')
  let books = await goodreads.text()
  xml2js.parseString(books, (err, result) => {
    if(err) {
      throw err;
    }

    books = result.GoodreadsResponse.reviews[0].review;
  });
  // Pass data to the page via props
  return { props: { music, wakatime, books } }
}
