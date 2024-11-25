/**
 * Lecciones
 * - Formas de agregar valores en campos de textos:
 *   -- addValue: Agrega un valor al contenido actual del campo
 *   -- setValue: Reemplaza completamente el valor actual del campo 
 */

import { ContactPage } from "../pages/contact-page";
const contact = new ContactPage();

describe('Contact', () => {
    it('Fill all the inpiut filds, submit form and assert success message', async () => {
        await browser.url('/contact')
        
        await contact.submitForm('test','test@gmail.com','12345678','This is a test message');

        //* Assert the success message
        //Thanks for contacting us! We will be in touch with you shortly
        const successAlert = $("[role='alert']")
        await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');

    });
});