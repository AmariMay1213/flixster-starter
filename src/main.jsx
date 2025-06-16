import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import MovieList from "./COMPONENTS/MOVIELIST/MovieList";
import SearchMovie from "./COMPONENTS/SEARCHMOVIE/SearchMovie";
import axios from "axios";
import MovieModal from "./COMPONENTS/MovieModal/MovieModal";


import "./index.css";


function MainApp() {
 // 1. This is your shared movie state
 const [movies, setMovies] = useState([]);
 const [showModal, setShowModal] = useState(false);
 const [selectedMovie, setSelectedMovie] = useState(null);


 // 2. When the app first loads, fetch the "now playing" movies
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


 return (
   <>
     <header className="header">
       <h1>Flixster</h1>
     </header>


     {/* 3. Give search access to setMovies */}
     <SearchMovie setMovies={setMovies} />


     {/* 4. Give MovieList access to the movies to display */}
     <MovieList movies={movies} onMovieClick={handleCardClick} />
     <MovieModal
       show={showModal}
       onClose={handleClose}
       movie={selectedMovie}
     />






   </>
 );
}


// This renders the app into the index.html <div id="root">
ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
   <MainApp />
 </React.StrictMode>
);
