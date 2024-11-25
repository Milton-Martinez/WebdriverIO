export class BlogPage {

    open(){
        return browser.url('https://practice.sdetunicorns.com/blog/');
    }
    get listRecentPosts(){
        return $$('#recent-posts-3 ul li')
    }
}