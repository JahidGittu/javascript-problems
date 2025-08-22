# 📝 JavaScript Problem Solving Practice

এই রিপোজিটরিতে বেসিক **JavaScript Problem Solving** প্র্যাকটিস করা হয়েছে।  
প্রতিটা প্রোবলেমের সাথে কোড ও টেস্ট কেস দেওয়া আছে।  

---

## ✅ Problem List

### 1. Reverse a String
```js
function reverseString(str){
    const chars = str.split("");
    const reverseChars = chars.reverse();
    const reversedStr = reverseChars.join("");
    return reversedStr;
}
console.log(reverseString("Trap")); // parT
2. Count Vowels in a String
js
Copy
Edit
function countVoweles(str){
    const voweles = "aeiou";
    let count = 0;
    const lowerStr = str.toLowerCase();

    for (let char of lowerStr){
        if (voweles.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVoweles("Mandatory")); // 3
3. Check Palindrome
js
Copy
Edit
function isPalindrome(str){
    const lowerstr = str.toLowerCase();
    const chars = lowerstr.split("");
    const reverseChars = chars.reverse();
    const reverseStr = reverseChars.join("");
    return lowerstr === reverseStr;
}
console.log(isPalindrome("Level")); // true
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("ProgrammingHero")); // false
4. Find the Maximum Number
js
Copy
Edit
function findMaxNum(arr){
    let max = arr[0];
    for (let num of arr){
        if (num > max){
            max = num;
        }
    }
    return max;
}
console.log(findMaxNum([2,5,6,4,9,15,4,5,7,12,25])); // 25
5. Remove Duplicates from an Array
js
Copy
Edit
function removeDuplicates(arr){
    const unique = [];
    for (let num of arr){
        if(!unique.includes(num)){
            unique.push(num);
        }
    }
    return unique;
}
console.log(removeDuplicates([5,4,2,4,6,5,2,3,8,8,8])); // [5,4,2,6,3,8]
6. Sum of All Numbers in an Array
js
Copy
Edit
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum = sum + num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4])); // 10
7. Find Even Numbers in an Array
js
Copy
Edit
function findEvenNumbers(arr) {
  const evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2,4,6]
8. Capitalize First Letter of Each Word
js
Copy
Edit
function capitalizeWords(str) {
  const words = str.split(" ");
  const result = [];
  for (let word of words) {
    const first = word.charAt(0).toUpperCase();
    const rest = word.slice(1);
    const capitalized = first + rest;
    result.push(capitalized);
  }
  return result.join(" ");
}
console.log(capitalizeWords("hello world")); // Hello World
9. Factorial of a Number
js
Copy
Edit
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5)); // 120
10. PingPong Challenge
👉 1 থেকে 20 পর্যন্ত প্রিন্ট করো:

3 এর গুণিতক হলে "Ping"

5 এর গুণিতক হলে "Pong"

দুটো হলে "PingPong"

js
Copy
Edit
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0) {
      console.log("PingPong");
    }
    else if (i % 3 === 0) {
      console.log("Ping");
    }
    else if (i % 5 === 0) {
      console.log("Pong");
    }
    else {
      console.log(i);
    }
  }
}
pingPong();
🚀 Summary
এই প্র্যাকটিসের মাধ্যমে শেখা যাবে –

String manipulation

Array operations

Loop & Condition

Mathematical logic

