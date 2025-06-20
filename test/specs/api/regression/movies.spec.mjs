import dotenv from 'dotenv';
dotenv.config();

import { getProjectionsByMovieAndDateData } from '../../../service/movies.js';

describe('Regression Tests - Movies Projections API', () => {
  it('Should return 200 and list of projections for valid movieId and date', async () => {
    const movieId = process.env.MOVIE_ID_PROJECTIONS;
    const date = process.env.PROJECTION_DATE;

    const response = await getProjectionsByMovieAndDateData(movieId, date);

    expect(response.status).toBe(200);

    const projections = response.data;

    expect(Array.isArray(projections)).toBe(true);

    if (projections.length > 0) {
      const projection = projections[0];
      expect(projection).toHaveProperty('id');
      expect(typeof projection.id).toBe('number');

      expect(projection).toHaveProperty('startTime');
      expect(typeof projection.startTime).toBe('string');

      expect(projection).toHaveProperty('hallName');
      expect(typeof projection.hallName).toBe('string');

      expect(projection).toHaveProperty('cinemaName');
      expect(typeof projection.cinemaName).toBe('string');
    }
  });
});
