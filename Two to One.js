/*
DESCRIPTION:
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

/*
function longest(s1, s2) {
  // your code
  let duplicates = {}, uniqueChars = [];
  for(let i = 0; i < Math.max(s1.length,s2.length); i++){
    if(i < s1.length){
      if(duplicates[s1[i]]){
        duplicates[s1[i]]++
      } else {
        duplicates[s1[i]] = 1;
      }
    }
    if(i < s2.length){
      if(duplicates[s2[i]]){
        duplicates[s2[i]]++
      } else {
        duplicates[s2[i]] = 1;
      }
    }
  }
  for(let key in duplicates){
    uniqueChars.push(key)
  }
  return uniqueChars.sort().join('')
}
*/
