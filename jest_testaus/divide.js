const divide = (a, b = 1) => {
  if (a === undefined || a === null || b === undefined || b === null) {
    throw new Error("ei parametreja");
  }
  if (b === 0) {
    throw new Error("nollalla jakaminen kielletty"); // 0
  }
  const result = Number(a) / Number(b);
  if (Number.isNaN(result)) {
    throw new Error("ei lukuja");
  }
  return result;
};

module.exports = divide;
