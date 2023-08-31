// if the message is < 10
const validateMessageArea = function(messageArea) {
    if(messageArea === '' || messageArea.length < 10) {
        // throw new Error(`Message needs to be at least 10 characters long!`);
        return false;
    } else {
        return true;
    }
  };

  // we'd need to initialize this function with module.exports 
module.exports = validateMessageArea;
