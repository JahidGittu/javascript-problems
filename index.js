// Problem 1:- Reverse a String

function reverseString(str){
    const chars = str.split("");
    const reverseChars = chars.reverse();
    const reversedStr = reverseChars.join("");

    return reversedStr
}
// test it
console.log(reverseString("Trap"))



// problem 2:- Count Vowels in a String

function countVoweles(str){
    const voweles = "aeiou"

    let count = 0;

    const lowerStr = str.toLowerCase();

    for (let char of lowerStr){
        if (voweles.includes(char)){
            count++
        }
    }
    return count
}
// test it
console.log(countVoweles("Mandatory"))



// Problem 3:- Check Palindrome

function isPalindrome(str){
    const lowerstr = str.toLowerCase()

    const chars = lowerstr.split("")

    const reverseChars = chars.reverse();

    const reverseStr = reverseChars.join("")

    if(lowerstr === reverseStr){
        return true
    }
    else{
        return false
    }
}

// test  it
console.log(isPalindrome("Level"))
console.log(isPalindrome("Madam"))
console.log(isPalindrome("ProgramingHero"))






// Problem 4:-Find the Maximum Number

function findMaxNum(arr){
    let max = arr[0];

    for (let num of arr){
        if (num > max){
            max = num
        }
    }
    return max
}

// test it
console.log(findMaxNum([2,5,6,4,9,15,4,5,7,12,25]))





// Problem 5:-Remove Duplicates from an Array

function removeDuplicates(arr){
    const unique = [];

    for (let num of arr){
        if(!unique.includes(num)){
            unique.push(num);
        }
    }
    return unique
}
// test it
console.log(removeDuplicates([5,4,2,4,6,5,2,3,8,8,8,8,]))



// Problem 6:- Sum of All Numbers in an Array

function sumArray(arr) {

  let sum = 0;


  for (let num of arr) {
    sum = sum + num;
  }

  return sum;
}

// Test
console.log(sumArray([1, 2, 3, 4])); 
