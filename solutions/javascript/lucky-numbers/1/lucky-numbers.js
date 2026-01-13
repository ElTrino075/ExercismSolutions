// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let lijstString1 = array1; 
  let getal1String = lijstString1.join("");
  let lijstString2 = array2; 
  let getal2String = lijstString2.join("");

  return Number(getal1String) + Number(getal2String);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const numberArray = String(value).split('');
  const numberArrayRev = numberArray.reverse();
  const newNumber = numberArrayRev.join('');

  return Number(newNumber) === value;
}

// Above code can be done much simpler:
// export function luckyNumber(value) {
//   const s = String(value);
//   return s === s.split('').reverse().join('');
// }


/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */

// input == null should catch Undefined also


export function errorMessage(input) {
  return (input == '' || input == null ) ? 'Required field' :
    !Number(input) ? 'Must be a number besides 0' : '';
}
