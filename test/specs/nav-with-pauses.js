import { HomePage } from "../pages/home-page";
const homepage = new HomePage();

describe('Navigation Menu', () => {
    it('Get the text of all menu items and assert them', async () => {
        //browser.url('/');
        await homepage.open();
        const  expectedLinks = [
            'Home',
            'About',
            'Shop',
            'Blog',
            'Contact',
            'My account'
        ];

        const actualLinks = []
        
        //await $('#zak-primary-menu').waitForDisplayed();
        //! Wait until the home text is desplayed on the navigation menu
        await browser.waitUntil( async () => {
            const homeText = await homepage.NavComponent.firstNavMenuList.getText()
            return homeText === "Home" // True || False
        }, {
            timeoutMsg: 'Could not verify the home text from #zak-primary-menu li'
        });

        //const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');
        const navLinks = await homepage.NavComponent.linksNavMenu;

        for (const link of navLinks){
            actualLinks.push(await link.getText())
        }
        await expect(expectedLinks).toEqual(actualLinks);

    });
});