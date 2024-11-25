/**
 * Lecciones:
 * 
 * manejo de paths
 *      lineas necesarias
 *          import path from 'path';
 *          const __dirname = path.resolve();
 *          const filePath = path.join(__dirname, './assets/wdio.jpg');
 * 
 *  ejecutar js
 *      await browser.execute("document.querySelector('#upfile_1').className=''");
 * 
 *  Como hacer upload de archivos a un input file
 * 
 */


import path from 'path';
const __dirname = path.resolve();

describe('Upload Tests', () => {
    it('Simple upload test', async() => {
        //Open url
        await browser.url('https://the-internet.herokuapp.com/upload');

        // Store test file path
        const filePath = path.join(__dirname, './test/data/wdio.jpg');

        //upload test file in chrome
        const remoteFilePath = await browser.uploadFile(filePath);

        //Set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath);

        //click on upload button
        await $('#file-submit').click();

        //assertion
        await expect($('h3')).toHaveText('File Uploaded!');

    });

    it.only('Upload on a hidden input field', async() => {
        //Open url
        await browser.url('/cart/');

        // Store test file path
        const filePath = path.join(__dirname, './test/data/wdio.jpg');

        //upload test file in chrome
        const remoteFilePath = await browser.uploadFile(filePath);

        //remove hidden class
        await browser.execute("document.querySelector('#upfile_1').className=''");

        //Set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath);

        //click on upload button
        await $('#upload_1').click();

         //assertion
         await expect($('#wfu_messageblock_header_1_label_1')).toHaveText(expect.stringContaining('uploaded successfully'));
        
    });

});