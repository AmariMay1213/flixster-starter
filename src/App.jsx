import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import MovieList from "./COMPONENTS/MOVIELIST/MovieList";
import SearchMovie from "./COMPONENTS/SEARCH/SearchMovie";
import MovieModal from "./COMPONENTS/MOVIE MODAL/MovieModal";
import DropDown from "./COMPONENTS/DROPDWON /DropDown";

import "./index.css";


function App() {
 // setting up variables in order to assign them properties 
 const [movies, setMovies] = useState([]);
 const [showModal, setShowModal] = useState(false);
 const [selectedMovie, setSelectedMovie] = useState(null);
 const [page,setPage] = useState(1); 


 //When the app first loads, fetch the "now playing" movies
 useEffect(() => {
   const fetchNowPlaying = async () => {
     try {
       const response = await axios.get(
         "https://api.themoviedb.org/3/movie/now_playing",
         {
           params: {
             api_key: import.meta.env.VITE_API_KEY,
           },
         }
       );
       setMovies(response.data.results);
     } catch (err) {
       console.error("Error fetching now playing:", err);
     }
   };


   fetchNowPlaying(); // Run on initial page load
 }, []);


  //2 when card clicked, fetch details & open modal
 const handleCardClick = async (movie) => {
   setShowModal(true);
   setSelectedMovie(null); //trigger the loading state
   try {
     const { data } = await axios.get(
       `https://api.themoviedb.org/3/movie/${movie.id}`,

    {
      params: {
         api_key: import.meta.env.VITE_API_KEY,
      },
   }
 );

  const videoRes =  await axios.get(
       `https://api.themoviedb.org/3/movie/${movie.id}/videos?`,

    {
      params: {
         api_key: import.meta.env.VITE_API_KEY,
      },
   }
  );

  const movieVideos = videoRes.data.results;

  const trailer = movieVideos.find(
    (video) => video.type === 'Trailer' && 'YouTube'

  );

  data.trailerKey = trailer ? trailer.key: null; 
  
  
  console.log("Movie Video Results: ",movieVideos); 
  console.log("Data: " , data)

     setSelectedMovie(data);
   } catch (err) {
     console.error(`Error fetching ${movie}: `, err);
   }
 };


 //3 close modal
 const handleClose = () => {
   setShowModal(false);
   setSelectedMovie(null);
 };


 //loads more pages onto the screen
 const handleLoadMore = async () =>{
  try{

    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        params: {
            api_key: import.meta.env.VITE_API_KEY,
            page: page +1,

        },
      }


    );
    setMovies(prevMovies => [...prevMovies, ...response.data.results]);
    setPage(prevPage => prevPage + 1);

    


  }catch(err){
    console.error("Error fetching another page: ", err); 
  }

 };


 return (
   <>
     <header className="header">
       <h1>Flixster</h1>
<div className = "controls-container">

     {/* Give search access to setMovies */}
     <SearchMovie setMovies={setMovies} />

      {/* adding dropdown feature, this is how you call a global param/prop*/}
     <DropDown setMovies={setMovies}/>
     </div>


          </header>

          <div className = "banner">

          </div>

<body>

  

     {/* Give MovieList access to the movies to display */}
     <MovieList movies={movies} onMovieClick={handleCardClick} />
     <button className="load-more" onClick={handleLoadMore}>
        Load More
    </button>

     <MovieModal
       show={showModal}
       onClose={handleClose}
       movie={selectedMovie}
     />

     </body>

     <footer>
      @2025 Flixster, Inc. 
     </footer>






   </>
 );
}

export default App;