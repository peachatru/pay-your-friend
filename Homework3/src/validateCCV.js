// CCV needs to be between 3-4 numbers and should be encrypted 
const validateCCV = function(CCV) {

    if(CCV.length < 3 || CCV.length > 4) {
        // throw new Error(`Invalid CCV number!`);
        return false;
    } else {
        return true;
    }
  };

  // we'd need to initialize this function with module.exports 
module.exports = validateCCV;
