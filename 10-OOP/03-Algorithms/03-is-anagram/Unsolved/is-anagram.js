// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false
let strA = "bbbbbbb";
let strB = "carrace";

var isAnagram = function (strA, strB) {
  lettersA = strA.split("").sort().join("");
  lettersB = strB.split("").sort().join("");

  //   console.table(lettersA);
  //   console.table(lettersB);
  if (lettersA.length === lettersB.length) {
    console.log(
      lettersA === lettersB
        ? strA + " and " + strB + " are anagrams!"
        : strA + " and " + strB + " are not anagrams."
    );
  } else {
    console.log(
      strA + " and " + strB + " are not the same length of characters."
    );
  }
};
//   for (i = 0; i < lettersA.length; i++) {
//     if (strA.length === strB.length) {
//       if (lettersA[i] === lettersB[i]) {
//         console.log(
//           strA +
//             " and " +
//             strB +
//             " are anagrams, I hope your pround of your scrabble cheating"
//         );
//         break;
//       } else {
//         console.log(strA + " and " + strB + " are not anagrams.");
//         break;
//       }
//     } else {
//       console.log(
//         strA +
//           " and " +
//           strB +
//           " aren't even the same number of characters, can you even count?"
//       );
//       break;
//     }
//   }
// };

isAnagram(strA, strB);
