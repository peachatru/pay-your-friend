// User must check terms 
const validateTerms = function(termsAndConditions) {
 
    if(termsAndConditions === 'on') {
        return true;

    } else {
        // throw new Error(`Terms and Conditions not checked!`);
        return false;
    }
  };

  // we'd need to initialize this function with module.exports 
module.exports = validateTerms;
