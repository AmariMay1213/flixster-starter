import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./DropDown.css"

function DropDown({setMovies}){
    //once again we're using setMovies as a prop so that the movie values presented on the screen will be whatever setMovies is set to

    const [filter,setFilter] = useState("");
    //useState will be used to track whatever filter the user chooses and if the user chooses another one then the filter will be updated

    const handleChange = (e) =>{
        setFilter(e.target.value); 
        //makes sure that whenever the user selects a new filter option in the drop down bar the back end filter is also updated not just the front end 
    }

    useEffect(()=>{
        //we use a useEffect as a function that does something when a filter is changed/chosen by the user kind of like an if the user does this 
        //then I want to do this 

        if(!filter){
            return; 
            //if no filter is selected then there is no need to do anything 
        }

        const fetchFilteredMovies = async () => {
            try{

                const response = await axios.get(
                            `https://api.themoviedb.org/3/discover/movie`,

                    {
                        params: {
                            api_key: import.meta.env.VITE_API_KEY,
                            sort_by: filter,
                        },
                    }
                );
                setMovies(response.data.results);
                //here we are passing in the grabbed data and displaying it as a readable array for the setMovies object to read and pass 
                //in for movies 

            }catch(err){
                console.error("Could not fetch filtered list of movies: ", err);
                
            }
        }    
            fetchFilteredMovies(); 


    }, [filter]);



    return(

        <div className = "filters">
       <select value={filter} onChange={handleChange} className='filter'>
  <option value="popularity.desc">🎬 Trending (Most Popular)</option>
  <option value="primary_release_date.desc">🆕 Release Date: Newest First</option>
  <option value="primary_release_date.asc">📅 Release Date: Oldest First</option>
  <option value="vote_average.desc">⭐️ Top Rated (Highest Vote Avg)</option>
  <option value="title.asc">🔤 Title A–Z</option>
  <option value="title.desc">🔤 Title Z–A</option>
</select>

</div>

        


    ); 
}

export default DropDown; 