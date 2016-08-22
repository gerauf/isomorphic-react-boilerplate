import React from 'react';
import es6Promise from 'es6-promise';
import { Link } from 'react-router';

class Photos extends React.Component {
  constructor() {
    super();
    this.state = { photos: [], page: -1};
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    fetch('http://jsonplaceholder.typicode.com/photos/')
      .then((response) => {
        return response.json();
      })
      .then((photos) => {
        photos = photos.slice(1,20)
        this.setState({photos: photos})
      })
  }
  render() {
    return (
      <div>
        <h1>Photos</h1>
        <Link to="/">
          home
        </Link>
        <button onClick={this.fetch}>Next</button>
        <ul>
          {
            this.state.photos.map(photo => (
              <Link to={'/photos/' + photo.id} key={photo.id}>
                <img src={photo.thumbnailUrl} />
              </Link>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Photos;
