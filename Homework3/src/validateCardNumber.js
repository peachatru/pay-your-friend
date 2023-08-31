// Card Number needs to in XXXX-XXXX-XXXX-XXXX format
const validateCardNumber = function(cardNumber) {

    if(cardNumber.length < 20 && cardNumber.length >= 18) {
        // throw new Error(`Card Number needs to be in format: XXXX-XXXX-XXXX-XXXX`);
        return true; 
    } else {
        return false; 
    }
  };

  // we'd need to initialize this function with module.exports 
module.exports = validateCardNumber;
