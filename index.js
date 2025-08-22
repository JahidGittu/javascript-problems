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





