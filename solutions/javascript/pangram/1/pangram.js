//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const isPangram = (sentence) => {

  const mySet = new Set();
  
  for (const ch of sentence.toLowerCase()) {

    if (ch >= "a" && ch <= "z") {
      mySet.add(ch);  
      if (mySet.size === 26) {
      return true;
    }
      }
  
  }
  return (mySet.size === 26);
};
