import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Link from 'next/link'

const IndexPage = ({ allPosts }) => (
  <Layout title="How this site was made">
    <article className="article theme__soft-orange">
      <div className="content">
        {allPosts.map((post) => (
          <div key={post.slug}>
            <h3 className="text-fancy">
              <Link href={post.slug}>
                <a className="hover:underline" target="_blank">{post.title}</a>
              </Link>
            </h3>
            <p>{post.excerpt}</p>
            <Link href={post.slug}>
              <a className="hover:underline" target="_blank">view the project: {post.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </article>
  </Layout>
)

export default IndexPage

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
  ],
  '_projects')

  return {
    props: { allPosts },
  }
}

