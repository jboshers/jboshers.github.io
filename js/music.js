import React from 'react';
import ReactDOM from 'react-dom';

var RecentAlbums = React.createClass({
  render: function () {
    var albums = this.props.albums.map(function(album, idx) {
      return (
        idx < 5 ?
        <Album
          key={idx}
          albumImage={album.image[3]['#text']}
          artistName={album.artist.name}
          name={album.name}
        /> : null
      );
    });

    return (
      <div className="waka-container">
        <h6 className="modal__title">Music I've Been Playing</h6>
          {albums}
      </div>
    );
  }
});
var Album = React.createClass({
  render: function () {
    return (
      <div className="album">
        <div>
          <img className="album__image" src={this.props.albumImage} />
        </div>
        <div className="album__content">
          <span className="album__title">{this.props.name}</span>
          {this.props.artistName}
        </div>
      </div>
    );
  }
});


const lastfmURL ='http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=boundbystars&limit=3&period=7day&api_key=abcd82a17cd358c1030c8798481f8106&format=json';
fetch(lastfmURL)
  .then(function(response) {
    return response.json();
  }).then(function(j){
    ReactDOM.render(<RecentAlbums albums={j.topalbums.album} />, document.getElementById('albums'));
  });
