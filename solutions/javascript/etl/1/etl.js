//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


// for (const [key, value] of Object.entries(obj))
// key.toLowerCase() om de object keys in upper te converteren naar lower
// newList {}    new object
// newList[ propertyname ] = value

export const transform = (old) => {
  const newList = {};

  for (const [score, letters] of Object.entries(old)) {
    for (const letter of letters) {
    newList[letter.toLowerCase()] = Number(score); }
  }
  return newList;
};
