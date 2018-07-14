const square = require("../square.js");
describe("A suite", () => {
  it("return number of array item equal square of array item", function() {
    expect(square.square([2,4])).toBe(1);
  });
    it("return number of array item equal square of array item", () => {
    expect(square.square([2,4,6,36])).toBe(2);
  });
});
