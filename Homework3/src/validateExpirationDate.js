// Expiration Date field needs to be filled out
const validateExpirationDate = function(expiration) {

    var currentDate = new Date(); 
    var expirationMonth = expiration.slice(5, 7) - 1;
    var expirationYear = expiration.slice(0, 4);
    if(expiration === null || expiration.length === 0) {
    //    throw new Error(`Card Expiration Date is empty!`);
        return false;
       
    } 
    else if(expirationYear <= currentDate.getFullYear()) {
        if(expirationMonth < currentDate.getMonth()) {
        //    throw new Error(`Card has expired!`);
            return false; 
        } else {
            return true;
        }
    }
  };

  // we'd need to initialize this function with module.exports 
module.exports = validateExpirationDate;
