import PostPreview from '../../components/articles/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section className="section theme__soft-blue">
      <div className="container">
        <h2 className="text-fancy h1 sp-m-b-3">...But Wait There&apos;s More</h2>
        <div className="grid-3-col">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
