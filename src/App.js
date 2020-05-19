import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import axios from 'axios';
import MoviesList from './components/MoviesList'
import FavoriteMoviesList from './components/FavoriteMoviesList'
import {useLocalStorage} from './hooks/useLocalStorage'

function App() {

  const [moviesList, setMoviesList] = useState([]);
  const [favoriteMoviesList, setFavoriteMoviesList] = useLocalStorage('favoriteMoviesList', []);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films')
  .then(response => {
    setMoviesList(response.data.results);
    console.log(response.data.results);
  })
  .catch(error => {
    console.log(error);
  });
  }, []);

  return (
    <div className="App container-fluid">
      <div className="movies-list-container container">
      <MoviesList moviesList={moviesList} setMoviesList={setMoviesList} favoriteMoviesList={favoriteMoviesList} setFavoriteMoviesList={setFavoriteMoviesList}/>
      </div>
      <div className="favorite-movies-list-container container">
      <FavoriteMoviesList favoriteMoviesList={favoriteMoviesList} setFavoriteMoviesList={setFavoriteMoviesList}/>
      </div>
    </div>
  );
}

export default App;
