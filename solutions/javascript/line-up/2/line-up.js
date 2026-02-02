//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, position) => {

  const sNumber = String(position);
  const lastTwo = position % 100; // modulo 100, take the last 2 digits
  const lastOne = position % 10;

  // creates an object to handle 1, 2 and 3
  const suffixByLastDigit = {1: 'st', 
                             2: 'nd',
                             3: 'rd'
                            };

  // ternary operator (compact if/else)
  // condition ? valueIfTrue  :  valueIfFalse
  // via suffixByLastDigit using lastOne, a lookup is done in the object. 
  //   So it returns st, nd or rd if found, or th when undefined
  const ordinal =
    lastTwo === 11 || lastTwo === 12 || lastTwo === 13
  ? 'th'
    : (suffixByLastDigit[lastOne] || 'th');

  return `${name}, you are the ${sNumber}${ordinal} customer we serve today. Thank you!`;
};
