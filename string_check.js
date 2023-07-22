function isTrueOrFalse(text) {
    if (text === "true") {
      return true;
    } else if (text === "false") {
      return false;
    } else {
      return null;
    }
  }
  
  const text = "true";
  const result = isTrueOrFalse(text);
  
  if (result === true) {
    console.log("The text is equal to 'true'.");
  } else if (result === false) {
    console.log("The text is equal to 'false'.");
  } else {
    console.log("The text is not equal to 'true' or 'false'.");
  }