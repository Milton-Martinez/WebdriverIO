export class ContactPage {

    open(){
        return browser.url('https://practice.sdetunicorns.com/contact');
    }
    get inputName(){
        return $('.contact-name input');
    }

    async submitForm(name, email, phone, message){
        //* Fill out the input filds
        await this.inputName.addValue(name)
        await $('.contact-email input').addValue(email)
        await $('.contact-phone input').addValue(phone)
        await $('.contact-message textarea').addValue(message)
        await $('button[type=submit]').click();
    }

}