import React from "react";
import FavoriteMovieItem from './FavoriteMovieItem'

export default ({ favoriteMoviesList, setFavoriteMoviesList }) =>
  <div className="fav-movies-container">
    <div className="fav-movies-title-container">
      <h3>Favorite Movies</h3>
    </div>
    <div className="fav-movies-content-container">
      {(favoriteMoviesList && favoriteMoviesList.length > 0) ?
        <FavoriteMoviesToShow favoriteMoviesList={favoriteMoviesList}
          setFavoriteMoviesList={setFavoriteMoviesList} />
        : <NoFavoriteMoviesToShow />}
    </div>
  </div>

const FavoriteMoviesToShow = ({ favoriteMoviesList, setFavoriteMoviesList }) => {

  const showFavoriteMoviesList = favoriteMoviesList.map((movie, movieId) =>
    <li key={movieId} className="fav-movie-item">
      <FavoriteMovieItem movie={movie} movieId={movieId}
        favoriteMoviesList={favoriteMoviesList} setFavoriteMoviesList={setFavoriteMoviesList} />
    </li>
  );

  return (
    <div className="fav-movies-list-container">
      <ul className="fav-movies-list">
        {showFavoriteMoviesList}
      </ul>
    </div>
  );
}

const NoFavoriteMoviesToShow = () => {
  const noMoviesMessage = 'No favorite movies yet...';

  return (
    <div className="no-fav-movies-content">
      {noMoviesMessage}
    </div>
  );
}