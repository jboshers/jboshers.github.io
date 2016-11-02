import React from 'react';
import ReactDOM from 'react-dom';
import {xmlToJson, parser} from './parsexml';
import $ from 'jquery';

var Recentbooks = React.createClass({
  render: function () {
    var books = this.props.books.map(function(book, idx) {
      return (
        idx < 4 ?
        <Book
          key={idx}
          bookImage={book.book.image_url['#text']}
          artistName={book.book.authors.author.name['#text']}
          name={book.book.title['#text']}
        /> : null
      );
    });

    return (
      <div className="waka-container">
        <h6 className="modal__title">Books I've Been Reading</h6>
          {books}
      </div>
    );
  }
});
var Book = React.createClass({
  render: function () {
    return (
      <div className="album">
        <div className="album__content">
          <span className="album__title">{this.props.name}</span>
          {this.props.artistName}
        </div>
      </div>
    );
  }
});


const goodreadsURL = 'https://www.goodreads.com/review/list/3644808.xml?key=R5jBSwGrgvsPr96ZozxCg&v=2';
// fetch(goodreadsURL)
//   .then(function(response) {
//     return response.text();
//   }).then(function(j){
//     let results = xmlToJson(parser(j));
//     ReactDOM.render(<Recentbooks books={results.GoodreadsResponse.reviews.review} />, document.getElementById('books'));
//   });
// 
// function jsonCallback(json){
//   var j = xmlToJson(parser(json))
//   console.log(j);
// }
//
// $.ajax({
//   url: goodreadsURL,
//   dataType: "jsonp"
// });
