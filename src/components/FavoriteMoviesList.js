import React from "react";
import Tooltip from '@material-ui/core/Tooltip';


const FavoriteMoviesList = ({ favoriteMoviesList, setFavoriteMoviesList }) => {
  
    const deleteFavoriteMovie = (e, id) => {
      e.preventDefault();
      const newList = favoriteMoviesList.filter((movie, movieId) => movieId !== id);
      setFavoriteMoviesList(newList);
    }
  
    const showFavoriteMoviesList = favoriteMoviesList.map((movie, movieId) => {
      return (
        <li key={movieId} className="fav-movie-item">
          <div className="container-per-fav-movie">
            <div className="fav-movie-title">{movie.title}</div>
            <div className="fav-movie-delete-button">
              <button className="delete-fav-movie-button"
              onClick={event => deleteFavoriteMovie(event, movieId)}>
                &times;
                </button>
            </div>
          </div>
        </li>
      );
    });

    const renderFavoriteMoviesList = () => {
      console.log(favoriteMoviesList);
        return (
            <div className="fav-movies-list-container">
              <ul className="fav-movies-list">
                {showFavoriteMoviesList}
              </ul>
            </div>
        );
    }

    const renderNoFavoriteMoviesToShow = () => {
        return (
            <div className="no-fav-movies-content">
              No favorite movies yet...
            </div>
        );
    }
  
    return (
      <div className="fav-movies-container">
        <h4>Favorite Movies</h4>
        {(favoriteMoviesList === null || favoriteMoviesList.length === 0) && renderNoFavoriteMoviesToShow()}
        {(favoriteMoviesList !== null && favoriteMoviesList.length !== 0) && renderFavoriteMoviesList()}
      </div>
    );
  }

  export default FavoriteMoviesList;