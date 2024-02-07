const calculatePrice = require("./calculatePrice");

describe("calculatePrice", () => {
  test("jos ei alennusta, ei kanta-asiakas, alv 24%", () => {
    expect(calculatePrice(100, false, 24)).toBe(124);
  });
  test("hinta 100€, 2.5% alennus kanta-asiakkaalle, alv 24%", () => {
    expect(calculatePrice(100, true, 24)).toBeCloseTo(120.9, 2);
  });

  test("hinta 200€, 5% alennus kanta-asiakkaalle, alv 24%", () => {
    expect(calculatePrice(200, true, 24)).toBeCloseTo(235.6, 2);
  });

  test("hinta 300€, 10% alennus kanta-asiakkaalle, alv 24%", () => {
    expect(calculatePrice(300, true, 24)).toBeCloseTo(334.8, 2);
  });

  test("heittää virheen virheellisillä syötteillä", () => {
    expect(() => calculatePrice(-100, true, 24)).toThrow(
      "Virheelliset syötteet"
    );
    expect(() => calculatePrice(100, true, -24)).toThrow(
      "Virheelliset syötteet"
    );
    expect(() => calculatePrice("sata", true, 24)).toThrow(
      "Virheelliset syötteet"
    );
  });
});
