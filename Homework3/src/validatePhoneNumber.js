// if SMS  is selected, phone number input field needs to be filled out
const validatePhoneNumber = function(phoneNumber) {

    if(phoneNumber.length < 10) {
        // throw new Error(`Phone number is invalid!`);
        return false;
    } else {
        return true; 
    }
  };

  // we'd need to initialize this function with module.exports 
module.exports = validatePhoneNumber;
