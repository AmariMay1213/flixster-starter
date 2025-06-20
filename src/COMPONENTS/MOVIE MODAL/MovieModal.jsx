import "./MovieModal.css";

const MovieModal = ({show, onClose,movie}) =>{
    if(!show) return null; 

    console.log(movie);

   

    return(
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <button onClick ={onClose}>X</button>
                </div>
                <div className="modal-body">
                   {!movie || !movie.title ? (
  <p>Loading...</p>
) : (
  <div className="details">
    <h2>{movie.title}</h2>
    <img
      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      alt={`${movie.title} poster`}
    />
    <p><strong>Release Date: </strong>{movie.release_date}</p>
    <p><strong>Runtime: </strong>{movie.runtime} minutes</p>
    {movie.genres && <p><strong>Genres: </strong>{movie.genres.map(g => g.name).join(", ")}</p>}

    <p><strong>Overview: </strong> {movie.overview}</p>

  {<movie className="trailerKey"></movie> && (
  
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.trailerKey}`} 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  )}
   
  </div>
)}

                </div>
            </div>
        </div>
    );
};

export default MovieModal; 

