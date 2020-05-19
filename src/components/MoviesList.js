import React, { useCallback } from "react";


const MoviesList = ({ moviesList, setMoviesList, favoriteMoviesList, setFavoriteMoviesList }) => {

    const handleSubmitFavMovies = (e) => {
        e.preventDefault();
        const filterMovies = moviesList.filter((movie) => {
            return movie.checked === true;
        });
        setFavoriteMoviesList(filterMovies);
    }

    const toggleChecked = useCallback(id => {
        setMoviesList(moviesList.map((movie, movieId) => ({
            ...movie,
            checked: movieId === id ? !movie.checked : movie.checked
        })));
    }, [setMoviesList, moviesList]);
  
    const showMoviesList = moviesList.map((movie, movieId) => {
      return (
        <li key={movieId} className="movie-item">
          <div className="container-per-movie">
          <div className="checkbox-container">
        <input type="checkbox" id={`check-item-${movieId}`} value={movieId} onClick={() => toggleChecked(movieId)}/>
         </div>
        <div className="movie-title-container">
        <label htmlFor={`check-item-${movieId}`} >{movie.title}</label>
         </div>
          </div>
        </li>
      );
    });

    const renderMoviesList = () => {
        return (
            <div className="movies-list-container">
                <form onSubmit={e => handleSubmitFavMovies(e)}>
              <ul className="movies-list">
                {showMoviesList}
              </ul>
              <div className="movies-button-container">
            <button type="submit">
                Set as my favorite movies!
            </button>
         </div>
              </form>
            </div>
        );
    }

    const renderNoMoviesToShow = () => {
        return (
            <div className="no-movies-content">
              No movies to show...
            </div>
        );
    }
  
    return (
      <div className="movies-container">
        <h4>All Movies</h4>
        {moviesList.length !== 0  && renderMoviesList()}
        {moviesList.length === 0 && renderNoMoviesToShow()}
      </div>
    );
  }

  export default MoviesList;