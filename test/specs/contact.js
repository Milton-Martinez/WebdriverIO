/**
 * Lecciones
 * - Formas de agregar valores en campos de textos:
 *   -- addValue: Agrega un valor al contenido actual del campo
 *   -- setValue: Reemplaza completamente el valor actual del campo 
 */



describe('Contact', () => {
    it('Fill all the inpiut filds, submit form and assert success message', async () => {
        await browser.url('/contact')
        
        //* Fill out the input filds
        await $('.contact-name input').addValue('Test Name')
        await $('.contact-email input').addValue('test@gmail.com')
        await $('.contact-phone input').addValue('123456789')
        await $('.contact-message textarea').addValue('This is a test message')
        await $('button[type=submit]').click();


        //* Assert the success message
        //Thanks for contacting us! We will be in touch with you shortly
        const successAlert = $("[role='alert']")
        await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');

    });
});