const circleArea = require("./circleArea");

describe("circleArea", () => {
  test("laskee pinta-alan oikein positiivisella säteellä", () => {
    expect(circleArea(1)).toBeCloseTo(3.14, 2);
    expect(circleArea(10)).toBeCloseTo(314.16, 2);
  });

  test("pyöristää pinta-alan kahden desimaalin tarkkuuteen", () => {
    expect(circleArea(1.123456)).toBeCloseTo(3.97, 2);
  });

  test("heittää jos säde on negatiivinen", () => {
    expect(() => circleArea(-1)).toThrow("Virheellinen säde");
  });

  test("heittää jos säde ei ole numero", () => {
    expect(() => circleArea("viisi")).toThrow("Virheellinen säde");
    expect(() => circleArea(undefined)).toThrow("Virheellinen säde");
  });
});
