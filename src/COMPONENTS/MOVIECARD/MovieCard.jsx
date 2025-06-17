import "./MovieCard.css"; 
import PropTypes from 'prop-types';
import { useState } from "react";


const MovieCard = ({ movie, onClick }) => {
  const [liked,setLiked] = useState(false); 
  const [watched,setWatched] = useState(false); 

  const movieLiked= (e) =>{
    e.stopPropagation();
    setLiked(!liked); 
    //function that sets the value of the movie being liked to true 
  }

  const watchedMovie = (e) => {
        e.stopPropagation();

    setWatched(!watched)
  }



  return (
    <div className="movie-card" onClick={() => onClick && onClick(movie)}>
      {/* Show poster if available, fallback alt if not */}

      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} poster`}
          className = "movie-poster"

        />
      ) : (
        <div className="no-poster">No Image Available</div>
      )}
<div className="movie-info">
      <h4>{movie.title}</h4>
      <h5>⭐️ {movie.vote_average}</h5>
      <button className="fav-button" onClick={movieLiked}>
        {liked ? "❤️" : "🤍"}
      </button>

      <button className="watched-button" onClick={watchedMovie}>
          {watched ? "✅" : "👁️" }
      </button>
      </div>
      
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func, // for modal opening later
};

export default MovieCard;
