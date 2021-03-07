export const errorMessages = {
    401: 'Invalid credentials, please try again.',
    emptyUsername: 'Please enter Email.',
    usernameLength: 'Email should not be more than 100 characters.',
    emailNotValid: "Entered email is not valid.",
    nameLength: 'Name should not be more than 100 characters.',
    emptyPassword: 'Please enter password.',
    passwordLength: 'Password should be between 8 to 15 characters.',
    matchPassword: 'Passwords do not match.',
    maxLengthReached: (fieldName, charLength) => `${fieldName} should not be greater than ${charLength}.`,
    emptyName: type => `Please enter ${type}.`,
    onlyAlphaNumeric: 'Only alphanumeric is allowed.',
    failedToGetUsers: 'Failed to get users.',
    notAValidUrl: 'Please enter a valid url.',
  };
  