function hasProperty(object: { [key: string]: any }, property: string) {
  return property in object;
}

// const result hasProperty({name: "BMW", model: "M3"}, "model"),
// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true

console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false
// Test
// Test
// console.log("HELLO this is train!");

// function objectToArray(obj: object) {
//   return Object.entries(obj);
// }
// console.log(objectToArray({ a: 10, b: 20 }));

// function calculateSumOfNumbers(array: any[]) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     console.log("array i:", array[i]);
//     if (typeof array[i] === "number") {
//       console.log("string:", array[i]);

//       count += array[i];
//     }
//   }
//   return count;
// }
// const result = calculateSumOfNumbers([15, "98", { son: 10 }, "a", 30]);
// console.log("result:", result);

// function palindromCheck(str: string): boolean {
//   // Stringni teskari tartibda qo'yish
//   const reversedStr = str.split("").reverse().join("");

//   // Asl va teskari stringlarni solishtirish
//   return str === reversedStr;
// }
// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));
// // console.log("function:");

// function getSquareNumbers(
//   numbers: number[]
// ): { number: number; square: number }[] {
//   return numbers.map((num) => ({ number: num, square: num * num }));
// }

// // Test
// console.log(getSquareNumbers([1, 2, 3])); // [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]

/**
 * Berilgan stringni so'zlar ketma-ketligini saqlab, so'zlarni chappasiga yozib qaytaradi.
 *
 * @param str String, ichida so'zlar bo'lishi mumkin.
 * @returns Chap qilingan so'zlar ketma-ketligi.
 */
/*nfunction reverseSentence(str: string): string {
  // Stringni so'zlarga ajratib olamiz
  const words = str.split(" ");

  // So'zlar ketma-ketligini saqlaymiz va chappasiga yozib chiqamiz
  const reversedSentence = words
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

  return reversedSentence;
}

// Test
console.log(reverseSentence("we like coding!")); // "ew ekil gnidoc"*/

/**
 * Berilgan stringda bo'lgan unli harflar sonini qaytaradi.
 *
 * @param str String, ichida unli harflar bo'lishi mumkin.
 * @returns Unli harflar soni.
 
function countVowels(str: string): number {
  // Stringni ichidagi unli harflarni hisoblaymiz
  const vowels = str.match(/[aeiou]/gi);

  // Agar unli harflar mavjud bo'lsa, ularning sonini qaytaramiz, aks holda 0 ni qaytaradi
  return vowels ? vowels.length : 0;
}

// Test
console.log(countVowels("string")); // 1

// function findLongestWord(s: string): string {
//   const words: string[] = s.split(" "); // stringni so'zlarga bo'lib ajratamiz
//   const longestWord: string = words.reduce((prevWord, currentWord) => {
//     return prevWord.length >= currentWord.length ? prevWord : currentWord;
//   }, "");
//   return longestWord;
// }

// // Misol
// const result: string = findLongestWord("I come from Uzbekistan");
// console.log(result); // "Uzbekistan" chiqadi

// // I -task yechimi
// /**
//  * Berilgan stringda bo'lgan raqamlarni ajratib olib yangi string sifatida qaytaradi.
//  *
//  * @param str String, ichida raqamlar bo'lishi mumkin.
//  * @returns Ajratilgan raqamlardan iborat string.
//  */
// function getDigits(str: string): string {
//   const digitsOnly = str.replace(/\D/g, "");

//   return digitsOnly;
// }

// // Test
// console.log(getDigits("m14i1t")); // "141"

//

// // console.log("BISMILLAH");

// /* H-task yechimi
// // function getPositive(arr: number[]): string {
// //   // Arrayni musbat qiymatlarini olib qaytiramiz
// //   const positiveNumbers = arr.filter((num) => num > 0);

// //   // Musbat qiymatlarni stringga aylantiramiz
// //   const positiveString = positiveNumbers.join("");

// //   return positiveString;
// // }

// // // Test
// // console.log(getPositive([1, -4, 2])); // "12"

// // function gerReverse(str: string): string {
// //   return str.split("").reverse().join("");
// // }

// // // Test
// // console.log(gerReverse("hello")); // "olleh"

// // function getReverse(str: string): string {
// //   return str.split("").reverse().join("");
// // }

// // console.log(getReverse("salom"));
// */

/**
 * har bitta request ichiga ozini joylaydi  join
 * Cocues self destroy
 */

/* Project Standarts:
//   - Login standarts
//   - Naming Starndarts
//          function methodi variable => CAMEL case goHome
//          Classlar => PASCAL case
//          folderlar, file => KEBAB
//          css classlar => SNAKE
//     - Error handling

// */

/* Request
  Traditional Api
   Rest Api
   GraphQl Api
  ...

/* Frontend  Devalopment 
 Traditional Frontend Development => BSSR -> (ADMIN) Bacakent server site rendring => EJS freamwork
 Modern Frontent Development      => SPA (USER, aplication) -> Single page Aplication => REACT

*/

/** Cookies
 * request join
 * self destroy
 */

/** VALIDATION
 * Frontend Validation
 * Backand validation
 * Database validation
 *
 */

//    return ele.path.replace(/\\/g, "/"); windowsda \ buni / bunga togirlab berad
