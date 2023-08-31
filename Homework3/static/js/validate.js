document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const firstName = document.getElementById('firstName'); 

    const lastName = document.getElementById('lastName');
    
    const firstNameRecipient = document.getElementById('firstNameRecipient'); 

    const lastNameRecipient = document.getElementById('lastNameRecipient');


    
    // const dNDCheckbox = document.getElementById('DNDCheckbox').checked;
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
    // const cardType = document.getElementById('cardType').value;
    const cardNumber = document.getElementById('cardNumber');
    const expiration = document.getElementById('Expiration');
    const ccv = document.getElementById('CCV');
    const amount = document.getElementById('Amount');
    const termsAndCondition = document.getElementById('termsAndConditions');

    form.addEventListener('submit', e => {
        //  image 
        const imagePreview = document.getElementById('imageUploadFile').value; 
        if(imagePreview === null || imagePreview === '') {
            e.preventDefault(); 
            alert("Please upload an image.");
        }

        // sender name
        if(firstName.value === null || firstName.value === '') {
            e.preventDefault(); 
            alert("Please input Sender's first name.");
        }
  
        if(lastName.value === null || lastName.value === '') {
            e.preventDefault(); 
            alert("Please input Sender's last name.");
        }

        // Recipient name
        
        if(firstNameRecipient.value  === null || firstNameRecipient.value.length === 0) {
            e.preventDefault(); 
            alert("Please input Recipient's first name.");
        }
  
        if(lastNameRecipient.value  === null || lastNameRecipient.value.length == 0) {
            e.preventDefault(); 
            alert("Please input Recipient's last name.");
        }

       

        // message box
        let message = document.getElementById('messageContent').value;

        if(message.length === 0 || message.length < 10) {
            e.preventDefault(); 
            alert("Your message must be at least 10 characters long.");
        }

        // Recipient Checkboxes
        // regex for email taken from: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
        let emailCheckbox = document.getElementById('EmailCheckbox').checked;
        if(emailCheckbox) {
            if(!email.value.match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                e.preventDefault(); 
                alert("Please enter a valid email address.");
            }
        }

        let sMSCheckbox = document.getElementById('SMSCheckbox').checked;
        if(sMSCheckbox) {
            if(phoneNumber.value === null || phoneNumber.value.length < 10) {
                e.preventDefault();
                alert("Please enter a valid phone number.");
            }
        }

        // payment details
        if(cardNumber.value === null || cardNumber.value === '') {
            e.preventDefault();
            alert("Please enter a valid card number.");

        } else if(cardNumber.value.length < 19) {
            e.preventDefault();
            alert("Please enter your card number in the format: XXXX-XXXX-XXXX-XXXX."); 
        }

        // validation expiration date from: 
        // https://stackoverflow.com/questions/27054951/how-do-i-validate-a-credit-card-expiry-date-with-javascripthttps://stackoverflow.com/questions/27054951/how-do-i-validate-a-credit-card-expiry-date-with-javascript
        var currentDate = new Date(); 
        var expirationMonth = expiration.value.slice(5, 7) - 1;
        var expirationYear = expiration.value.slice(0, 4);
        if(expiration.value === null || expiration.value.length === 0) {
            e.preventDefault(); 
            alert("Please enter card's expiration date.");
        } 
        else if(expirationYear <= currentDate.getFullYear()) {
            if(expirationMonth < currentDate.getMonth()) {
                e.preventDefault(); 
                alert("Your card has expired. Please give valid payment.");
            }
        }

        // ccv value 
        if(ccv.value === null || ccv.value.length < 3 || ccv.value.length > 4) {
            e.preventDefault(); 
            alert("Please enter valid CCV number");

        }

        // amount
        if(amount.value === null || amount.value.length === 0) {
            e.preventDefault(); 
            alert("Please enter amount.");
        }

        // terms and conditions
        if(!termsAndCondition.checked) {
            e.preventDefault(); 
            alert("Please agree to the Terms and Conditions before payment.");
        }
      
    });
  });
