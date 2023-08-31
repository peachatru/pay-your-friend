// if the Sender's name is empty, throw error 
const validateSenderName = function(firstName, lastName) {
    if(firstName === '' || lastName === '') {
        // throw new Error(`Sender's name is missing a field!`);
        return false;
    } else {
        return true;
    }
  };

  // we'd need to initialize this function with module.exports 
module.exports = validateSenderName;
