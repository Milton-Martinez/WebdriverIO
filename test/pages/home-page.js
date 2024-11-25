import { NavComponent } from "./components/nav-comp";
const navcomp = new NavComponent()

export class HomePage {
    
    constructor() {
        
    }

    open(){
        return browser.url('https://practice.sdetunicorns.com/');
    }

    get btnGetStarted(){
        return $('a#get-started');
    }
    get imageLogo(){
        return $('//*[@id="zak-masthead"]/div/div/div/div[1]/div/a');
    }
    get txtHeading(){
        return $('.elementor-widget-container h1');
    }
    get NavComponent(){
        return navcomp
    }

}