import { convertNumToWord } from "./utils/converter";

describe("Num Convert Test", () => {
  it("should return correct string of the 4 numbers", () => {
    expect(convertNumToWord(9874)).toBe(
      "Nine Thousand Eight Hundred And Seventy Four"
    );
  });
  it("should return correct string of the 3 numbers", () => {
    expect(convertNumToWord(374)).toBe("Three Hundred And Seventy Four");
  });
  it("should return correct string of the 2 number", () => {
    expect(convertNumToWord(54)).toBe("Fifty Four");
  });
  it("should return correct string of a number", () => {
    expect(convertNumToWord(3)).toBe("Three");
  });
});