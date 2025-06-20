import dotenv from 'dotenv';
dotenv.config();

class Search {
    keyword = process.env.KEYWORD;

    currentlyShowingLinkSelector = 'a[href="/currently-showing"][data-discover="true"]';
    searchInputSelector = 'input[placeholder="Search Movies"]';
    movieTitleSelector = 'h2.text-3xl.font-bold.text-primary';

    async openCurrentlyShowing() {
        const currentlyShowingLink = await $(this.currentlyShowingLinkSelector);
        await currentlyShowingLink.click();
    }

    async searchMovie(keyword = this.keyword) {
        const searchInput = await $(this.searchInputSelector);
        await searchInput.setValue(keyword);
    }

    async getMovieTitles() {
        const elements = await $$(this.movieTitleSelector);
        const titles = [];
        for (const el of elements) {
            titles.push(await el.getText());
        }
        return titles;
    }

    get defaultKeyword() {
        return this.keyword;
    }
}

export default new Search();
