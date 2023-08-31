// Amount should be a number
const validateAmount = function(Amount) {

    if(Amount.length === 0) {
        return false; 
        // throw new Error(`Amount field is empty!`);
    } else {
        return true; 
    }
  };

  // we'd need to initialize this function with module.exports 
module.exports = validateAmount;
