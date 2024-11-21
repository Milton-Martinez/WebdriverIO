describe('About', () => {
    it('Assert URL in about page', async () => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');
        
        //Click About page
        await $('=About').click();

        //Assert URL
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');

    });
});