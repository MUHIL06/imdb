/*
8) Array Manipulation and Duplication
Problem: Write a function duplicateArray that takes an array of numbers and returns a new array where each element is duplicated consecutively.
Example Input:
console.log(duplicateArray([1, 2, 3]));
Example Output:
[1, 1, 2, 2, 3, 3]
*/
const duplicateArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
      newArr.push(arr[i]);
    }
    return newArr;
  };
  console.log(duplicateArray([1, 2, 3]));
  
  /*
  9) Nested Loops and String Transformation
  Problem: Write a function expandString that takes a string with characters followed by digits (e.g., "a3b2") and returns an expanded string where each character is repeated as many times as the following
  digit indicates (e.g., "aaabb").
  Input:
  console.log(expandString("a3b2"));
  Output:
  aaabb
  */
  const expandString = (str) => {
    let expandedStr = "";
    for (let i = 0; i < str.length; i += 2) {
      let char = str[i];
      let count = parseInt(str[i + 1]);
      for (let j = 0; j < count; j++) {
        expandedStr += char;
      }
    }
    return expandedStr;
  };
  console.log(expandString("a3b3"));
  
//   /*
//   10) String Manipulation and Character Count
//   Problem: Write a function countCharOccurrences that takes a string and a character, and returns the number of times the character appears in the string.
//   Example Input:
//   console.log(countCharOccurrences("hello world", "l"));
//   Example Output:
//   3
//   */
  const countCharOccurrences = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  };
  console.log(countCharOccurrences("hello world", "w"));

  //question no 4.
  function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// Example usage:
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
// Output: 12
