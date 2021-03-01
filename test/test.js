import isPalindrome from "../src/main.js";
import assert from "assert";

describe("Array", function () {
  it("should return true when given a lowercase palindrome", () => {
    assert(isPalindrome("racecar"));
    assert(isPalindrome("ana"));
  });

  it("should return false when given a string that is not a palindrome", () => {
    assert(!isPalindrome("Hat"));
    assert(!isPalindrome("hello"));
  });

  it("should be case insensitive when determining if a string is a palindrome", () => {
    assert(isPalindrome("RaceCAr"));
  });

  it("should return false when given null", () => {
    assert(!isPalindrome(null));
  });

  it("should return false when given an empty string", () => {
    assert(!isPalindrome(""));
  });

  it("should return true for a sentence with punctuation that is a palindrome", () => {
    assert(isPalindrome("Mr. Owl ate my metal worm"));
    assert(isPalindrome("A man, a plan, a canal – Panama"));
    assert(isPalindrome("Able was I ere I saw Elba"));
  });
});
