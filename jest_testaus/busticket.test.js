const busticket = require("./busticket");

describe("busticket", () => {
  test("alle 7-vuotias", () => {
    expect(busticket(6)).toBe(0);
  });

  test("7-15-vuotiaat", () => {
    expect(busticket(7)).toBe(1);
    expect(busticket(15)).toBe(1);
  });

  test("16-25-vuotiaat", () => {
    expect(busticket(16)).toBe(1.5);
    expect(busticket(25)).toBe(1.5);
  });

  test("26-65-vuotiaat", () => {
    expect(busticket(26)).toBe(3);
    expect(busticket(65)).toBe(3);
  });

  test("yli 65-vuotiaat", () => {
    expect(busticket(66)).toBe(1.5);
  });

  test("virheellinen syöte (merkkijono) heittää virheen", () => {
    expect(() => busticket("viisi")).toThrow("Virheellinen ikä");
  });

  test("negatiivinen ikä heittää virheen", () => {
    expect(() => busticket(-1)).toThrow("Virheellinen ikä");
  });
});
