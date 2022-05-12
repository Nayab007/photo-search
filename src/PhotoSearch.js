import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const unsplash = new Unsplash({
  accessKey: `${API_KEY}`,
});

export default function PhotoSearch() {
  const [query, setQuery] = useState('');
  const [pics, setPics] = useState([]);
  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {' '}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "Lion" or "Kiwi"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <a
                href={pic.urls.full}
                target="_blank"
                rel="noopener noreferrer"
              >
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="100%"
              height="59%"
            ></img>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
