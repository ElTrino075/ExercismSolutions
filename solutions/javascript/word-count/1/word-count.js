//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// [a-z0-9]+(?:'[a-z0-9]+)*

export const countWords = (sentence) => {
  const regexp = /[a-z0-9]+(?:'[a-z0-9]+)*/gi;
  // const wordArray = sentence.toLowerCase().match(regexp);
  const wordArray = sentence.toLowerCase().match(regexp) ?? [];
  // const wordCount = {};  ==> this one inherits, so when the sentence contains 'constructor'
  //                                  things will not go very well
  const wordCount = Object.create(null);  /* ==> creates completely empty object */

  wordArray.forEach((word) => {
    wordCount[word] = (wordCount[word] ?? 0) + 1;
    }
  ) 
  return wordCount;
};
