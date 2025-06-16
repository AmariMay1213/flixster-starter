import { useState } from "react";
import axios from "axios";

// We receive setMovies from main.jsx so we can update the movie list
function SearchMovie({ setMovies }) {
  const [searchQuestion, setSearchQuestion] = useState("");

  // Called when the Search button is clicked or Enter is pressed
  const handleSearch = async (e) => {
    e.preventDefault(); // prevent form from refreshing the page

    if (!searchQuestion.trim()) return; // do nothing if input is empty

    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
            query: searchQuestion,
          },
        }
      );

      // Update the movie list with search results
      setMovies(response.data.results);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  // Called when the Clear button is clicked
  const handleClear = async (e) => {
    e.preventDefault(); // stop form from refreshing
    setSearchQuestion(""); // clear the input box

    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing",
        {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
          },
        }
      );

      // Show now playing movies again
      setMovies(response.data.results);
    } catch (err) {
      console.error("Clear failed:", err);
    }
  };

  return (
    <form className="search-movie">
      <input
        className="search-input"
        type="text"
        placeholder="Enter movie name"
        value={searchQuestion}
        onChange={(e) => setSearchQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch(e);
        }}
      />

      <button className="search-button" onClick={handleSearch} type="submit">
        Search
      </button>

      <button className="clear-button" onClick={handleClear} type="reset">
        Clear
      </button>
    </form>
  );
}

export default SearchMovie;
