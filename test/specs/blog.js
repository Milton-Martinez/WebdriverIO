import { BlogPage } from "../pages/blog-page";
const blog = new BlogPage()

describe('Blog', () => {
    it('Get the list of all recent posts and assert the length of each list item > 10 and assert the total length of the list is 4', async() => {
        //await browser.url('/blog');
        blog.open();
        //*Get the recent post list elements
        const recentPostsList = await blog.listRecentPosts;

        //*Loop through the list and assert the text length is greater than 10
        for (const item of recentPostsList) {
            const text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);
        }

        //*Assert the total length of the list is 4
        await expect(recentPostsList).toHaveLength(5);

    });
});