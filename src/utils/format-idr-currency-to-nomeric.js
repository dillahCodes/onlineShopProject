const parseIDRToNumeric = (idrString) => {
  return parseInt(idrString.replace(/[^0-9]/g, ""), 10);
};

export default parseIDRToNumeric;
