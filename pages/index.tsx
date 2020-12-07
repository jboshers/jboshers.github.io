import Layout from '../components/layout'
import Intro from '../components/homepage/intro'

const IndexPage = () => (
  <Layout title="I make things with humans for humans" showFooter={false}>
    <div className="homepage">
      <Intro />
    </div>
  </Layout>
)

export default IndexPage
