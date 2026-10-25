//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, anagrams) => {
  let correctAnagrams = [];
   
  function splitWord(wholeWord) {
    return wholeWord.toLowerCase().split("").sort().join("")
  }

  anagrams.forEach((element) => {
    if(word.toLowerCase() !== element.toLowerCase()) {
      const processedAnagram = splitWord(element);
      const processedWord = splitWord(word);
      if(processedWord === processedAnagram) {
        correctAnagrams.push(element)
      }
    }
  })
  
  return correctAnagrams;
};
