/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// Import necessary packages
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// Step 1: Use inquirer to get user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'url',
            message: 'Enter a URL to generate its QR code:',
            validate: (input) => input.startsWith('http://') || input.startsWith('https://') || 'Please enter a valid URL!'
        }
    ])
    .then((answers) => {
        const url = answers.url;

        // Step 2: Generate QR code
        const qrCodeImage = qr.image(url, { type: 'png' });
        const qrCodeFileName = 'qrcode.png';
        qrCodeImage.pipe(fs.createWriteStream(qrCodeFileName));
        console.log(`QR code saved as ${qrCodeFileName}`);

        // Step 3: Save user input to a text file
        const textFileName = 'userInput.txt';
        fs.writeFileSync(textFileName, `User-entered URL: ${url}`);
        console.log(`User input saved in ${textFileName}`);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });