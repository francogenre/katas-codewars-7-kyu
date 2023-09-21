/*
DESCRIPTION:
Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

Notes:

Spaces and special characters should remain the same.
Capital letters should transfer in the same way but remain capitilized.
Examples
"Hello"               -->  "Ifmmp"
"What is your name?"  -->  "Xibu jt zpvs obnf?"
"zoo"                 -->  "app"
"zzZAaa"              -->  "aaABbb"
*/

function nextLetter(str) {
 return str.replace(/[a-zA-Z]/g, function(c){
       switch (c) {
          case 'z': return 'a';
          case 'Z': return 'A';
          default:  return String.fromCharCode(c.charCodeAt(0) +1);
        } 
    });
}

