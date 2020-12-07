import DateFormatter from '../date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <div className="article--image image__slightly-round">
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div>
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}
