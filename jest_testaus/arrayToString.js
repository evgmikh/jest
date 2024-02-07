function arrayToString(arr) {
  // Tarkistetaan array
  const isValid = arr.every(
    (item) =>
      typeof item === "string" ||
      typeof item === "number" ||
      typeof item === "boolean"
  );

  if (!isValid) {
    throw new Error("Taulukko sisältää ei-sallittuja arvoja");
  }

  return arr.join(":");
}

module.exports = arrayToString;
