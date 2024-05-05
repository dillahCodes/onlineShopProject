function truncateString(text, maxLength) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

export default truncateString;
