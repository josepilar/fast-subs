import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import { ItemList, CoverImage } from './styles';

const SearchResults = ({ omdbResults, formValues }) => {
  const [selectedEntry, setSelectedEntry] = useState();
  const { season, episode, lang = 'esp' } = formValues;
  // mock results
  const perro = JSON.parse(`[{"Title":"Misfits","Year":"2009–2013","imdbID":"tt1548850","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNzRiNDcyZjItNzc1ZC00OTk3LWI3ZTItNDc0NTgxNjg3ZTZhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjM4NjgwODc@._V1_SX300.jpg"},{"Title":"The Pirates! Band of Misfits","Year":"2012","imdbID":"tt1430626","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDhkOGZkZWMtNGI4Mi00ZWI3LTgyYTgtMDU4ZDI3NTNjMWFiXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"},{"Title":"The Pirates! Band of Misfits","Year":"2012","imdbID":"tt1430626","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDhkOGZkZWMtNGI4Mi00ZWI3LTgyYTgtMDU4ZDI3NTNjMWFiXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"},{"Title":"The Misfits","Year":"1961","imdbID":"tt0055184","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZWRkMDIxNTQtYzVkZi00NjBjLWIzYzYtYzQ1Y2U3OTA1NjIyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg"},{"Title":"The Misfits Club","Year":"2014","imdbID":"tt3686272","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZDEyYTBiYjItZmY2Yi00NzZjLWJhZjEtYzljN2VhZDIwMDQzXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg"},{"Title":"Misfits of Science","Year":"1985–1986","imdbID":"tt0088568","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BOTg5NmJjNjQtYmQwMC00YTZiLTkwZmQtZDliZjIyZGRlYjY0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_SX300.jpg"},{"Title":"Bobcat Goldthwait's Misfits & Monsters","Year":"2018–","imdbID":"tt6957316","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMTAwODA3MzgwNzheQTJeQWpwZ15BbWU4MDA3MzYxOTUz._V1_SX300.jpg"},{"Title":"Misfits Erazer","Year":"2011–","imdbID":"tt2358073","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMTY3NzQzODA0NF5BMl5BanBnXkFtZTgwNTUzMDUwMTE@._V1_SX300.jpg"},{"Title":"Marie and the Misfits","Year":"2016","imdbID":"tt4428774","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmZjNDMyNzEtY2NmZS00NzEzLWI2Y2UtYWY4NjI0ZDVkNjgzXkEyXkFqcGdeQXVyNjc3NzgwNTY@._V1_SX300.jpg"},{"Title":"Social Misfits","Year":"2001","imdbID":"tt0228878","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzJmMWIwMTMtYzk0OS00ZDFmLTlkMTUtNjg0MDg0YmI2OWYzXkEyXkFqcGdeQXVyMjQwMjAxMzg@._V1_SX300.jpg"}]`);

  const selectEntry = movie => {
    setSelectedEntry(movie);
    // Seems like open subtitles is killing XML and REST services favoring a new API but it's on
    // its early stages, this projects stays on hold.
    // forum entry: https://www.opensubtitles.com/docs/api/html/index.htm
    console.log(movie);
  };

  return <ul>
    {!selectedEntry && (omdbResults || perro).map((result, idx) => (
      <React.Fragment key={`${result.imdbID}-${idx}`}>
        <ItemList onClick={() => selectEntry(result)} data-tip data-for={`${result.imdbID}-${idx}`}>{result.Title} ({result.Year})</ItemList>
        <ReactTooltip id={`${result.imdbID}-${idx}`}>
          <CoverImage alt={result.Title} src={result.Poster} />
        </ReactTooltip>
      </React.Fragment>
    ))}
    {selectedEntry && (
      <React.Fragment>
        {selectedEntry.Title}
      </React.Fragment>
    )}
  </ul>
};

export default SearchResults;
