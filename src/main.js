// Palindrome Function
export default function isPalindrome(a) {
  if (a === null || a === "") return false;
  else {
    for (let i = 0; i < a.len; i++) {
      if (a.charAt(0) !== a.charAt(a.len - 1 - i)) return false;
    }
    return true;
  }
}
