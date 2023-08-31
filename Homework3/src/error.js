// if the Recipient's name is Stu Dent or Stuart Dent, then an error will be thrown
// bc they are banned from using the application
const catchError = function(firstNameRecipient, lastNameRecipient) {
    if(lastNameRecipient === 'Dent') {
        if(firstNameRecipient === 'Stu' || firstNameRecipient === 'Stuart') {
            // throw new Error(`${firstNameRecipient} ${lastNameRecipient} is banned!`);
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
  };

  // we'd need to initialize this function with module.exports 
module.exports = catchError;
