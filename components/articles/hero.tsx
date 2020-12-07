import DateFormatter from '../../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title?: string
  coverImage?: string
  date?: Date
  excerpt?: string
  slug?: string
}

export default function Hero({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <section className="section theme__soft-pink">
      <div className="container">
        <h1 className="text-fancy section--heading">Articles</h1>
        <div className="media">
          <CoverImage title={title} src={coverImage} slug={slug} />
          <div className="media-body">
            <h3 className="text-fancy">
              <Link as={`/articles/${slug}`} href="/articles/[slug]">
                <a>{title}</a>
              </Link>
            </h3>
            <div>
              <DateFormatter dateString={date} />
            </div>
            <div>
              <p>{excerpt}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
