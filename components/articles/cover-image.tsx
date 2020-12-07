import Link from 'next/link'

export default function CoverImage({ title, src, slug }) {
  const image = (
    <img
      src={src ? src : '/articles/default-thumbnail.png'}
      alt={`Cover Image for ${title}`}
      className="image__slightly-round"
    />
  )
  return (
    <div>
      {slug ? (
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
