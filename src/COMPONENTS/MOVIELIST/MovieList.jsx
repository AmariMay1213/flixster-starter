import "./MovieList.css";
import MovieCard from "../MOVIECARD/MovieCard";

// MovieList receives the movie data from main.jsx as a prop
const MovieList = ({ movies, onMovieClick }) => {
  // If the array is empty , show a message
  if (movies.length === 0) {
    return <p className="no-results">No movies found.</p>;
  }
console.log(movies); 
  return (
    <div className="movies-list">
      {/* Loop through all movies passed in and render a MovieCard for each */}
      {movies.map((item, idx) => (
        <MovieCard key={idx} movie={item} onClick={onMovieClick}/>
      ))}
    </div>
    
  );
};

export default MovieList;
