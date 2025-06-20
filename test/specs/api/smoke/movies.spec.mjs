import dotenv from 'dotenv';
dotenv.config();

import { getMovieByIdData } from '../../../service/movies.js';

describe('Regression Tests - Movies API', () => {
  it('Should return 200 and correct movie data for a valid movieId', async () => {
    const validMovieId = process.env.MOVIE_ID;
    const response = await getMovieByIdData(validMovieId);
    expect(response.status).toBe(200);

    const movie = response.data;

    expect(movie.id).toBe(validMovieId);
    expect(movie.title).toBeDefined();
    expect(typeof movie.title).toBe('string');

    expect(movie.language).toBeDefined();
    expect(typeof movie.language).toBe('string');

    expect(movie.duration).toBeDefined();
    expect(typeof movie.duration).toBe('number');

    expect(movie.trailerUrl).toBeDefined();
    expect(typeof movie.trailerUrl).toBe('string');

    expect(movie.projectionStartDate).toBeDefined();
    expect(Array.isArray(movie.projectionStartDate)).toBeTrue();
    expect(movie.projectionStartDate.length).toBe(3);
    expect(typeof movie.projectionStartDate[0]).toBe('number');
    expect(typeof movie.projectionStartDate[1]).toBe('number');
    expect(typeof movie.projectionStartDate[2]).toBe('number');

    expect(movie.projectionEndDate).toBeDefined();
    expect(Array.isArray(movie.projectionEndDate)).toBeTrue();
    expect(movie.projectionEndDate.length).toBe(3);
    expect(typeof movie.projectionEndDate[0]).toBe('number');
    expect(typeof movie.projectionEndDate[1]).toBe('number');
    expect(typeof movie.projectionEndDate[2]).toBe('number');

    expect(movie.genres).toBeDefined();
    expect(Array.isArray(movie.genres)).toBeTrue();
    if (movie.genres.length > 0) {
      expect(movie.genres[0].id).toBeDefined();
      expect(movie.genres[0].name).toBeDefined();
    }

    expect(movie.synopsis).toBeDefined();
    expect(typeof movie.synopsis).toBe('string');

    expect(movie.pgRating).toBeDefined();
    expect(typeof movie.pgRating).toBe('string');

    expect(movie.director).toBeDefined();
    expect(typeof movie.director).toBe('string');

    expect(movie.writers).toBeDefined();
    expect(Array.isArray(movie.writers)).toBeTrue();

    expect(movie.cast).toBeDefined();
    expect(Array.isArray(movie.cast)).toBeTrue();
    if (movie.cast.length > 0) {
      expect(movie.cast[0].name).toBeDefined();
      expect(movie.cast[0].characterName).toBeDefined();
    }

    expect(movie.stills).toBeDefined();
    expect(Array.isArray(movie.stills)).toBeTrue();

    expect(movie.imdbRating).toBeDefined();
    expect(typeof movie.imdbRating).toBe('number');

    expect(movie.rottenTomatoesRating).toBeDefined();
    expect(typeof movie.rottenTomatoesRating).toBe('number');
  });
});
