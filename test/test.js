import isPalindrome from "../src/main.js";
import assert from "assert";

describe("Array", function () {
  it("should return true when given a palindrome", () => {
    assert(isPalindrome("racecar"));
  });

  it("should return false when given null", () => {
    assert(!isPalindrome(null));
  });

  it("should return false when given an empty string", () => {
    assert(!isPalindrome(""));
  });
});
