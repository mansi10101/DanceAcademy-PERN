export const validateEmail = (input) => {
  var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
};

export const validatemobile = (input) => {
  var validRegex = /^[1-9]{1}[0-9]{9}$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
};

export const validateAge = (input) => {
  if (parseInt(input) >= 18 && parseInt(input) <= 65) {
    return true;
  } else {
    return false;
  }
};

export const validateAccNo = (account) => {
  if (
    account.length >= 11 &&
    account.length <= 16 &&
    /^[0-9\b]+$/.test(account)
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateName = (text) => {
  if (text === undefined || text.length < 3) {
    return false;
  } else {
    return true;
  }
};

export const handleUpCase = (text) => {
  return text.toUpperCase();
};

export const handleFLCase = (text) => {
  return text[0].toUpperCase() + text.substring(1);
};
