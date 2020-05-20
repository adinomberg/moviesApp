import React from "react";
import MovieItem from './MovieItem';
import StarIcon from '@material-ui/icons/Star';


export default ({ moviesList, setMoviesList, favoriteMoviesList, setFavoriteMoviesList }) => {
      
    return (
      <div className="movies-container">
        <div className="movies-title-container">
        <h3>All Movies</h3>
        </div>
        <div className="movies-content-container">
        {moviesList.length !== 0  ? 
        <MoviesToShow moviesList={moviesList} setMoviesList={setMoviesList}
         setFavoriteMoviesList={setFavoriteMoviesList}/> 
         : <NoMoviesToShow />}
         </div>
      </div>
    );
  }

  const MoviesToShow = ({ moviesList, setMoviesList, setFavoriteMoviesList }) => {


    const handleSubmitFavMovies = (e) => {
      e.preventDefault();
      const filterMovies = moviesList.filter(movie => {
          return movie.checked === true;
      });
      setFavoriteMoviesList(filterMovies);
  }

  const showMoviesList = moviesList.map((movie, movieId) => 
  <li key={movieId} className="movie-item">
    <MovieItem movie={movie} movieId={movieId} moviesList={moviesList} 
    setMoviesList={setMoviesList} setFavoriteMoviesList={setFavoriteMoviesList} />
  </li>
  );
  

    return (
            <div className="movies-list-container">
                <form onSubmit={e => handleSubmitFavMovies(e)}>
              <ul className="movies-list">
                {showMoviesList}
              </ul>
              <div className="movies-button-container">
            <button type="submit" className="movies-button">
                Set as my favorite movies! <StarIcon />
            </button>
         </div>
              </form>
            </div>
    );
  }
    

    const NoMoviesToShow = () => {
      const noMoviesMessage = 'No movies to show...';

      return (
            <div className="no-movies-content">
              {noMoviesMessage}
            </div>
      );
    }

