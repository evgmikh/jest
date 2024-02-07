function busticket(age) {
  if (typeof age !== "number" || age < 0) {
    throw new Error("Virheellinen ikä");
  }

  if (age < 7) {
    return 0;
  } else if (age < 16) {
    return 1;
  } else if (age <= 25) {
    return 1.5;
  } else if (age > 25 && age <= 65) {
    return 3;
  } else if (age > 65) {
    return 1.5;
  }
}
module.exports = busticket;
