import DateFormatter from '../../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div>
      <div>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="h4">
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div>
        <DateFormatter dateString={date} />
      </div>
      <p>{excerpt}</p>
    </div>
  )
}
