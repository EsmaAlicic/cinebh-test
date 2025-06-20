import SignInPage from '../../../pageobjects/SignIn.js';

describe('Sign In Test', () => {
    it('Should sign in successfully', async () => {
        await browser.url('/');

        await SignInPage.clickSignInTrigger();
        await SignInPage.enterDefaultCredentials();
        await SignInPage.submitLogin();

        const loggedIn = await SignInPage.isLoggedIn();
        expect(loggedIn).toBe(true);
    });
});
