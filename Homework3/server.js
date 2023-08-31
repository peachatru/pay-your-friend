const express = require('express');
const multer = require('multer');

// Uploading image into /uploads folder
// as its original file name taken from: 
//  https://www.makeuseof.com/upload-image-in-nodejs-using-multer/
var storageImg = multer.diskStorage ({
    // in this this method we're declaring everything necessary for image upload
    // the destination of the image will be in the uploads/ folder
    destination: 'static/uploads/', 

    // this will upload the image with its original file type name
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer ( {
    storage: storageImg,
});

const path = require("path");
const app = express(); 
const PORT = 80; 

app.use(express.static('static'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const html_dir = __dirname + "/templates/";

app.get('/', (req, res) => {
    res.sendFile(html_dir + 'form.html');
    console.log("query", req.query);
    console.log("body", req.body);
});

// validates Recipient's name
const catchError = require('./src/error.js'); 

// validates Sender's name
const validateSenderName = require('./src/validateSenderName.js');

// validates message
const validateMessageArea = require('./src/validateMessageArea.js');
// validate Email
const validateEmail = require('./src/validateEmail.js');
// validate phone number
const validatePhoneNumber = require('./src/validatePhoneNumber.js');
// validate card number
const validateCardNumber  = require('./src/validateCardNumber.js');

// validate expiration date
const validateExpirationDate = require('./src/validateExpirationDate.js');

// validate ccv
const validateCCV = require('./src/validateCCV.js');

// validate amount 
const validateAmount = require('./src/validateAmount.js');

// validate terms and conditions 
const validateTerms = require('./src/validateTerms.js');


// 
app.post('/formdata', upload.single('imageUploadFile'), (req, res) => {
    // // validates Recipient's name
    let recipientName = catchError(req.body['firstNameRecipient'], req.body['lastNameRecipient']); 

    // // validates Sender's name
    let senderName = validateSenderName(req.body['firstName'], req.body['lastName']);
   
    // // validates message
    let message = validateMessageArea(req.body['messageArea']);
   
    // // validate Email
    let email = validateEmail(req.body['email']); 
   
    // // validate phone number
    let phoneNumber = validatePhoneNumber(req.body['phoneNumber']); 
   
    // validate card number
    let cardNumber  = validateCardNumber(req.body['cardNumber']);
    
    // // validate expiration date
    let expirationDate = validateExpirationDate(req.body['expiration']);
   
    // // validate ccv
    let ccv = validateCCV(req.body['CCV']);
  
    // // validate amount 
    let amount = validateAmount(req.body['Amount']);
   
    // // validate terms and conditions 
    let termsAndConditions = validateTerms(req.body['termsAndConditions']);


    if(senderName && recipientName && message && cardNumber && expirationDate && ccv && amount && termsAndConditions) {
        if(req.body['type'] === 'EmailCheckbox') {
            if(email) {
                if(req.file === undefined) {
                    res.sendFile(html_dir + 'error.html');
                } else {
                    res.sendFile(html_dir + 'success.html');
                }
            } else {
                res.sendFile(html_dir + 'error.html');
            }

        } else if(req.body['type'] === 'SMSCheckbox') {
            if(phoneNumber) {
                if(req.file === undefined) {
                    res.sendFile(html_dir + 'error.html');
                } else {
                    res.sendFile(html_dir + 'success.html');
                }
            } else {
                res.sendFile(html_dir + 'error.html');
            }
        } 
        res.sendFile(html_dir + 'success.html');

    } else {
        res.sendFile(html_dir + 'error.html');
    }

  });

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
