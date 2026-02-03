//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


// slightly different, maybe a bit more explainatory regarding the tens and ones digits:

const ordinal = (numStr) => {
  const tensDigit = numStr.at(-2);
  const onesDigit = numStr.at(-1);

  if (tensDigit === "1") return "th";            // 10-19 => th
  return ({ "1": "st", "2": "nd", "3": "rd" }[onesDigit]) || "th";
};

export const format = (name, position) =>
  `${name}, you are the ${position}${ordinal(String(position))} customer we serve today. Thank you!`;



// const ordinal = (numStr) =>
//   numStr.at(-2) !== '1' && 
//   ({ "1": "st", "2": "nd", "3": "rd" })[numStr.at(-1)] ||
//   "th";
  
// export const format = (name, position) =>
//   `${name}, you are the ${position}${
//   ordinal(String(position))
//   } customer we serve today. Thank you!`;
