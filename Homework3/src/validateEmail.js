var emailRegex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// if the email is selected, email input field needs to be filled out
const validateEmail = function(email) {

    // let emailVal = document.getElementById("email"); 
    if(!email.match(emailRegex)) {
        return false;
        // throw new Error(`Email is invalid`);

    } else {
        return true;
    }
  };

  // we'd need to initialize this function with module.exports 
module.exports = validateEmail;
