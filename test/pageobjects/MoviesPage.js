import dotenv from 'dotenv';
dotenv.config();

class MoviesPage {
    header = process.env.MOVIE_DETAILS_HEADER;

    upcomingLinkSelector = 'a[href="/upcoming-movies"][data-discover="true"]';
    firstMovieCardSelector = 'a[href^="/movies/"][data-discover="true"]';
    firstMovieTitleSelector = 'h3.text-xl.text-primary.font-semibold';
    movieTitleDetailSelector = 'h1.text-px-32';
    movieDetailsHeaderSelector = 'h2.text-2xl';
    trailerIframeSelector = 'iframe';
    imageContainerSelector = '.grid.grid-cols-2.gap-4';
    imageSelector = 'img.object-cover';
    genresSelector = 'span.bg-customGray';
    descriptionTextSelector = 'p.text-base.leading-relaxed';

    async openMainPage() {
        await browser.url('/');
    }

    async openUpcomingMovies() {
        const upcomingLink = await $(this.upcomingLinkSelector);
        await upcomingLink.click();
    }

    async clickFirstMovie() {
        const firstMovieCard = await $(this.firstMovieCardSelector);
        this.firstMovieTitle = await firstMovieCard.$(this.firstMovieTitleSelector).getText();
        await firstMovieCard.click();
    }

    async getMovieTitleOnDetailPage() {
        const movieTitleElement = await $(this.movieTitleDetailSelector);
        return await movieTitleElement.getText();
    }

    async getMovieDetailsHeader() {
        return await $(this.movieDetailsHeaderSelector).getText();
    }

    async isTrailerPresent() {
        return await $(this.trailerIframeSelector).isExisting();
    }

    async getImageCount() {
        const container = await $(this.imageContainerSelector);
        const images = await container.$$(this.imageSelector);
        return images.length;
    }

    async getGenres() {
        return await $$(this.genresSelector);
    }

    async getDescriptionText() {
        const description = await $(this.descriptionTextSelector);
        return await description.getText();
    }
}

export default new MoviesPage();
