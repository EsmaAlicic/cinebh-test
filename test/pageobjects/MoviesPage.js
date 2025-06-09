import dotenv from 'dotenv';
dotenv.config();

class MoviesPage {
    header = process.env.MOVIE_DETAILS_HEADER;

    async openMainPage() {
        await browser.url('/');
    }

    async openUpcomingMovies() {
        const upcomingLink = await $('a[href="/upcoming-movies"][data-discover="true"]');
        await upcomingLink.click();
    }

    async clickFirstMovie() {
        const firstMovieCard = await $('a[href^="/movies/"][data-discover="true"]');
        this.firstMovieTitle = await firstMovieCard.$('h3.text-xl.text-primary.font-semibold').getText();
        await firstMovieCard.click();
    }

    async getMovieTitleOnDetailPage() {
        const movieTitleElement = await $('h1.text-px-32');
        return await movieTitleElement.getText();
    }

    async getMovieDetailsHeader() {
        return await $('h2.text-2xl').getText();
    }

    async isTrailerPresent() {
        return await $('iframe').isExisting();
    }

    async getImageCount() {
        const container = await $('.grid.grid-cols-2.gap-4'); 
        const images = await container.$$('img.object-cover'); 
        return images.length;
    }

    async getGenres() {
        return await $$('span.bg-customGray');
    }

    async getDescriptionText() {
        const description = await $('p.text-base.leading-relaxed');
        return await description.getText();
    }   
}

export default new MoviesPage();