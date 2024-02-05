const sum = (a, b = 0) => {
  if (a === undefined || a === null) {
    throw new Error("ei parametreja");
  }
  const result = Number(a) + Number(b);
  if (Number.isNaN(result)) {
    throw new Error("ei lukuja");
  }
  return result;
};
module.exports = sum;
