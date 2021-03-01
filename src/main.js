function check(a) {
  return !(a === null || a === "" || typeof a !== "string");
}

function sanitize(a) {
  return a.replace(/[^A-Z0-9]/gi, "").toLowerCase();
}

export default function isPalindrome(a) {
  if (!check(a)) return false;
  else {
    let newA = sanitize(a);
    for (let i = 0; i < newA.length; i++) {
      if (newA.charAt(i) !== newA.charAt(newA.length - 1 - i)) return false;
    }
    return true;
  }
}
