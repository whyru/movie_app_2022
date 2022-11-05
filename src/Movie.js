import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, title, year, summary, poster}) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
        
        <div class="movie_data">
            <h2 class="movie_title">{title}</h2>
            <h3 class="movie_year">{year}</h3>
            <p class="movie_summary">{summary}</p>
            </div></div>
            );
}

Movie.propTypes= { 
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;