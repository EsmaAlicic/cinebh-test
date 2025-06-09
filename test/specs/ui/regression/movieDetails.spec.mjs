import MoviesPage from '../../../pageobjects/MoviesPage.js';

describe('Upcoming Movies - Movie Details Page Test', () => {
    it('Should open movie details and validate content', async () => {
        await MoviesPage.openMainPage();
        await MoviesPage.openUpcomingMovies();
        await MoviesPage.clickFirstMovie();

        const detailTitle = await MoviesPage.getMovieTitleOnDetailPage();
        expect(detailTitle.toLowerCase()).toContain(MoviesPage.firstMovieTitle.toLowerCase());

        const header = await MoviesPage.getMovieDetailsHeader();
        expect(header).toBe(MoviesPage.header);

        const trailerExists = await MoviesPage.isTrailerPresent();
        expect(trailerExists).toBeTrue();

        const imageCount = await MoviesPage.getImageCount();
        expect(imageCount).toBe(4);

        const description = await MoviesPage.getDescriptionText();
        expect(description.length).toBeGreaterThan(10);

        const genres = await MoviesPage.getGenres();
        expect(genres.length).toBeGreaterThan(0);
    });
});