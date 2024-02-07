const arrayToString = require("./arrayToString");

describe("arrayToString", () => {
  test("muuttaa merkkijonojen, lukujen ja totuusarvojen", () => {
    expect(arrayToString(["a", 1, true, "b", 2, false])).toBe(
      "a:1:true:b:2:false"
    );
  });

  test("käsittelee tyhjän taulukon oikein", () => {
    expect(arrayToString([])).toBe("");
  });

  test("heittää jos taulukko sisältää ei-sallittuja arvoja", () => {
    expect(() => arrayToString(["a", null, "b"])).toThrow(Error);
    expect(() => arrayToString(["a", [], "b"])).toThrow(Error);
    expect(() => arrayToString(["a", {}, "b"])).toThrow(Error);
    expect(() => arrayToString(["a", undefined, "b"])).toThrow(Error);
  });
});
