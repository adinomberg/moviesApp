import React from "react";
import Tooltip from '@material-ui/core/Tooltip';


export default ({ movie, movieId, favoriteMoviesList, setFavoriteMoviesList }) => {
    const deleteFavoriteMovie = (e, id) => {
        e.preventDefault();
        const newList = favoriteMoviesList.filter((movie, movieId) => movieId !== id);
        setFavoriteMoviesList(newList);
      }

    return (
          <div className="container-per-fav-movie">
            <div className="fav-movie-title">
                {movie.title}
                </div>
            <div className="fav-movie-delete-button">
              <button className="delete-fav-movie-button"
              onClick={event => deleteFavoriteMovie(event, movieId)}>
                &times;
                </button>
            </div>
          </div>
    );
    
}