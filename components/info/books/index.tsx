import styles from './index.module.css'

const Book = ({ book }) => {
  return (
    <div className={styles.book}>
      <span className={styles.bookTitle}>{book.book[0].title}</span>
      {' - '}
      <span className="book__author">{book.book[0].authors[0].author[0].name[0]}</span>
    </div>
  )
}

const Books = ({ books }) => {
  return (
    <div>
      <h5 className="text-fancy h3 sp-m-b-3">Currently Reading</h5>
      <ul className="list">
        {books.map((book, i) => (
          <li key={i}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Books
