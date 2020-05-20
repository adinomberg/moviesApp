import React, { useCallback } from "react";

export default ({ movie, movieId, moviesList, setMoviesList, setFavoriteMoviesList }) => {
    const toggleChecked = useCallback(id => {
        setMoviesList(moviesList.map((movie, movieId) => ({
            ...movie,
            checked: movieId === id ? !movie.checked : movie.checked
        })));
    }, [setMoviesList, moviesList]);

    return (
        <label className="label-container-per-movie" htmlFor={`check-item-${movieId}`} >
            <div className="container-per-movie">
                <div className="checkbox-container">
                    <div className="pretty p-icon p-round p-smooth p-plain">
                        <input type="checkbox" id={`check-item-${movieId}`}
                            value={movieId} onClick={() => toggleChecked(movieId)} />
                        <div className="state p-warning-o">
                            <i className="icon fa fa-star"></i>
                            <label></label>
                        </div>
                    </div>
                </div>
                <div className="movie-title-container">
                    {movie.title}
                </div>
            </div>
        </label>
    );
}