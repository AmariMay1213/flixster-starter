import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DropDown({setMovies}){
    const [filter,setFilter] = useState("");
    console.log("selected filter", filter);

    // Calling the api
    const handleFilter = async() =>{
        try{
            // get data
            const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&sort_by=${filter}`,
                {
                    params: {
                       api_key: import.meta.env.VITE_API_KEY,
                    },
                }
            ); 
            console.log(response.data.results);
            setMovies(response.data.results);
        }catch(err){
            console.error("Filter Failed: ", err); 
        }
    }

    const handleOnChange2 = (e) => {
        // Set the filter step 1
        setFilter(e.target.value)
      // Call the api
        handleFilter()
    }

      



    return(

        <div className='drop-down-bar'>
            <label>Sort By: </label>
            <select value = {filter} className='filter' onChange={handleOnChange2}>
                 <option value = "primary_release_date.desc">Most Recent</option>
                <option value = "popularity.desc">Most Popular Movies</option>
                <option value = "title.desc">Alphabetic Order: Descending</option>
                <option value = "title.asc">Alphabetic Order: Ascending</option>
                <option value = "primary_release_date.asc">Older Movies</option>
                <option value = "vote-average.desc">Voter Average: Descending</option>
            </select>
        </div>
        


    ); 
}

export default DropDown; 