import Search from '../../../pageobjects/Search.js';

describe('Search Movies Test for default keyword', () => {
    it(`Should return movies with titles containing keyword`, async () => {
        await browser.url('/');

        await Search.openCurrentlyShowing();
        await Search.searchMovie();

        const results = await Search.getMovieTitles();

        for (const title of results) {
            expect(title.toLowerCase()).toContain(Search.defaultKeyword.toLowerCase());
        }
    });
});
