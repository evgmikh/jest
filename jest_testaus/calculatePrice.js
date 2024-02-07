function calculatePrice(price, isCustomer, vat) {
  if (
    typeof price !== "number" ||
    price < 0 ||
    typeof vat !== "number" ||
    vat < 0
  ) {
    throw new Error("Virheelliset syötteet");
  }

  let discount = 1;

  if (isCustomer) {
    if (price >= 50 && price < 150) {
      discount = 0.975; // -2.5%
    } else if (price >= 150 && price < 250) {
      discount = 0.95; // -5%
    } else if (price >= 250) {
      discount = 0.9; // -10%
    }
  }

  const vatFactor = 1 + vat / 100;
  const finalPrice = price * discount * vatFactor;

  return Math.round(finalPrice * 100) / 100;
}

module.exports = calculatePrice;
