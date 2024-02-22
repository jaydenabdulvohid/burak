// G-Task yechimi                      G-Task yechimi                          G-Task yechimi

console.log("BISMILLAH");
function getHighestIndex(arr) {
  // highestIndex va highestValue o'zgaruvchilarini 0 va birinchi array elementiga tenglash
  let highestIndex = 0;
  let highestValue = arr[0];

  // Loop orqali arrayning qolgan barcha elementlarini tekshiramiz
  for (let i = 1; i < arr.length; i++) {
    // Agar hozirgi qiymat eng katta qiymatdan katta bo'lsa
    if (arr[i] > highestValue) {
      // highestValue va highestIndex o'zgaruvchilarini yangilaymiz
      highestValue = arr[i];
      highestIndex = i;
    }
  }

  // Eng yuqori indexni qaytaramiz
  return highestIndex;
}

// Test qilish uchun funksiya
let array = [5, 21, 12, 21, 8];
let highestIndex = getHighestIndex(array);
console.log("Highest Index:", highestIndex);
