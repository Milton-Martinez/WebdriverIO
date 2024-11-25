describe('IFrame', () => {
    it('Working with iframe', async() => {
        //open url
        await browser.url('/iframe-sample/');

        //access the iframe first 
        const iframe = await $('#advanced_iframe');

        await browser.switchFrame(iframe);

        //verify logo exist
        await expect($('.hfe-site-logo-set')).toExist();

        // switch to parent frame
        await browser.switchToParentFrame();

        //verify page title
        await expect($('.zak-page-title')).toHaveText('IFrame Sample')
        


    });
});