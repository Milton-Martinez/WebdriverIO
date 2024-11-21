//Practice E-Commerce Site – SDET Unicorns
//https://practice.sdetunicorns.com/

describe('Home', () => {
    it('Open URL and Assert title', async () => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');

        //Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    });
});