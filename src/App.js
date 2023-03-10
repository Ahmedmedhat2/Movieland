import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


//9e26c6a7 API KEY

const API_URL ='http://www.omdbapi.com?apikey=9e26c6a7';

const movie1 = 
    {
        "Title": "Superman",
        "Year": "1978",
        "imdbID": "tt0078346",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
      };


const App = () => {

const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
}
    useEffect(() => {
searchMovies({API_URL});
  }, []);

  return (
  <div className='app'>
    <h1>MoviesPark</h1>
    <div className='search'>
        <input
        placeholder='Search for movies'
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <img
        src={SearchIcon}
        alt='search'
        onClick={()=> searchMovies(searchTerm)}
/>
    </div>

{ movies?.length > 0 
? (
        <div className='container'>
        {movies.map((movie) => (
            <MovieCard movie={movie} />
        ))}
         </div>
    ) : (
        <div className='empty'> 
        <h2>No movies found!</h2>
        </div>

    )}

    
      </div>
  );
}


export default App;
