import dotenv from 'dotenv';
dotenv.config();

const sampleMovie = {
  title: process.env.SAMPLE_MOVIE_TITLE,
  posterUrl: process.env.SAMPLE_MOVIE_POSTER,
  duration: parseInt(process.env.SAMPLE_MOVIE_DURATION),
  genres: [
    {
      id: parseInt(process.env.SAMPLE_MOVIE_GENRE_1_ID),
      name: process.env.SAMPLE_MOVIE_GENRE_1_NAME,
    },
    {
      id: parseInt(process.env.SAMPLE_MOVIE_GENRE_2_ID),
      name: process.env.SAMPLE_MOVIE_GENRE_2_NAME,
    },
  ],
  projectionStartsAt: [
    parseInt(process.env.SAMPLE_MOVIE_PROJECTION_YEAR),
    parseInt(process.env.SAMPLE_MOVIE_PROJECTION_MONTH),
    parseInt(process.env.SAMPLE_MOVIE_PROJECTION_DAY),
  ],
};


const sampleProjections = JSON.parse(process.env.SAMPLE_PROJECTIONS);

export { sampleMovie, sampleProjections };
