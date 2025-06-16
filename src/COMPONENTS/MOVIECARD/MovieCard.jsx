import "./MovieCard.css"; 
import PropTypes from 'prop-types';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={() => onClick && onClick(movie)}>
      {/* Show poster if available, fallback alt if not */}
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
      ) : (
        <div className="no-poster">No Image Available</div>
      )}

      <h4>{movie.title}</h4>
      <h5>Rating: {movie.vote_average}</h5>
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
