const divide = require("./divide");

describe("divide-funktion testit", () => {
  test("jakaa kaksi numeroa oikein", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(-4, 2)).toBe(-2);
  });

  test("heittää virheen, jos parametreja ei anneta", () => {
    expect(() => divide()).toThrow("ei parametreja");
    expect(() => divide(null, 2)).toThrow("ei parametreja");
  });

  test("heittää virheen jaettaessa nollalla", () => {
    expect(() => divide(10, 0)).toThrow("nollalla jakaminen kielletty");
  });

  test("heittää virheen, jos syötteet eivät ole numeroita", () => {
    expect(() => divide("kymmenen", 2)).toThrow("ei lukuja");
    expect(() => divide(10, "kaksi")).toThrow("ei lukuja");
  });
});
