//Practice E-Commerce Site – SDET Unicorns
//https://practice.sdetunicorns.com/

import { HomePage } from "../pages/home-page";

const homepage = new HomePage()

describe('Home', () => {

    // before(async () => {
    //     console.log('THIS COULD BE USED FOR TEST SETUP');
    // });
    beforeEach(async() => {
        console.log('THIS RUNS BEFORE EACH TEST');
        await homepage.open();
    });
    // after(async () => {
    //     console.log('THIS COULD BE USED FOR TEST CLEANUP');
    // });
    // afterEach(async() => {
    //     console.log('THIS RUNS AFTER EACH TEST');
    // });

    it('Open URL and Assert title', async () => {
        //Open URL
        // await browser.url('https://practice.sdetunicorns.com/');
        

        //Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    });

    it('Assert URL in about page', async () => {
        //Open URL
        //await browser.url('https://practice.sdetunicorns.com/');
        
        
        //Click About page
        await $('=About').click();

        //Assert URL
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');

    });

    it('Click get started btn and assert url contains get-started text', async () => {

        //Open homepage
        //await browser.url('https://practice.sdetunicorns.com/');
        

        //Click get started button
        await $('a#get-started').click();

        //Assert url contains get-started text
        await expect(browser).toHaveUrl(expect.stringContaining("#get-started"));
    });

    it('Click get started btn, then click in the logo and assert url doesnt contains get-started text', async () => {

        //Open homepage
        //await browser.url('https://practice.sdetunicorns.com/');
        

        //Click get started button
        //await $('a#get-started').click();
        await homepage.btnGetStarted.click();

        //Click logo in the hopmepage
        //await $('//*[@id="zak-masthead"]/div/div/div/div[1]/div/a').click();
        await homepage.imageLogo.click();

        //Assert url contains get-started text
        await expect(browser).not.toHaveUrl(expect.stringContaining("#get-started"));
    });

    it('Find heading elemnt and assert the text', async () => {

        //Open homepage
        //await browser.url('https://practice.sdetunicorns.com/');
        

        // Find heading element
        //const headingEl = await $('.elementor-widget-container h1');
        const headingEl = await homepage.txtHeading;
        //const headingElText = await headingEl.getText();

        /**
         * getText() - for text manipulation
         * toHaveText() - to validate the exact text from the element directly+
         */

        //Assert the text
        //await expect(headingElText).toEqual('Think different. Make different.');
        await expect(headingEl).toHaveText('Think different. Make different.')

    });

});