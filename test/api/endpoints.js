const baseUrl = 'https://api.cinebh.vgrbo.org/api';

export const getVenues = {
  method: 'GET',
  url: `${baseUrl}/public/venues`
};

export const createVenue = {
  method: 'POST',
  url: `${baseUrl}/public/venues`
};

export const createMovie = {
  method: 'POST',
  url: `${baseUrl}/public/movies`,
};

export const getMovieById = (movieId) => ({
  method: 'GET',
  url: `${baseUrl}/public/movies/${movieId}`,
});

export const getProjectionsByMovieAndDate = (movieId, date) => ({
  method: 'GET',
  url: `${baseUrl}/public/movies/${movieId}/projections?date=${date}`,
});

export const getUpcomingMovies = {
  method: 'GET',
  url: `${baseUrl}/public/movies/upcoming`,
};

export const getLatestMovies = {
  method: 'GET',
  url: `${baseUrl}/public/movies/latest`,
};

export const getDetailedMovies = {
  method: 'GET',
  url: `${baseUrl}/public/movies/detailed`,
};

export const getCurrentMovies = {
  method: 'GET',
  url: `${baseUrl}/public/movies/current`,
};
