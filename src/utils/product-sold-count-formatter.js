const productSoldCountFormatter = (soldCount) => {
  if (soldCount < 1000) {
    return soldCount;
  } else if (soldCount >= 1000 && soldCount < 1000000) {
    return `${soldCount / 1000}rb+`;
  } else if (soldCount >= 1000000 && soldCount < 1000000000) {
    return `${soldCount / 1000000}jt+`;
  }
};

export default productSoldCountFormatter;
