// I -task yechimi
/**
 * Berilgan stringda bo'lgan raqamlarni ajratib olib yangi string sifatida qaytaradi.
 *
 * @param str String, ichida raqamlar bo'lishi mumkin.
 * @returns Ajratilgan raqamlardan iborat string.
 */
function getDigits(str: string): string {
  // Stringdan faqat raqamlarni ajratib olamiz
  const digitsOnly = str.replace(/\D/g, "");

  return digitsOnly;
}

// Test
console.log(getDigits("m14i1t")); // "141"

/* Project Standarts:
  - Login standarts
  - Naming Starndarts
         function methodi variable => CAMEL case goHome
         Classlar => PASCAL case             
         folderlar, file => KEBAB                                    
         css classlar => SNAKE    
    - Error handling                               

*/

/**
  Traditional Api
  Rest Api
  GraphQl Api
  ...
 */

// console.log("BISMILLAH");

/* H-task yechimi
// function getPositive(arr: number[]): string {
//   // Arrayni musbat qiymatlarini olib qaytiramiz
//   const positiveNumbers = arr.filter((num) => num > 0);

//   // Musbat qiymatlarni stringga aylantiramiz
//   const positiveString = positiveNumbers.join("");

//   return positiveString;
// }

// // Test
// console.log(getPositive([1, -4, 2])); // "12"

// function gerReverse(str: string): string {
//   return str.split("").reverse().join("");
// }

// // Test
// console.log(gerReverse("hello")); // "olleh"

// function getReverse(str: string): string {
//   return str.split("").reverse().join("");
// }

// console.log(getReverse("salom"));
*/
