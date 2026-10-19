//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, anagrams) => {
  let correctAnagrams = [];
   
  const wordLetterCount = {};

  const wordLowerCase = word.toLowerCase();
  const anagramsLowerCase = anagrams.map(element => {
    return element.toLowerCase();
  });

  for (const letter of wordLowerCase) {
  wordLetterCount[letter] = (wordLetterCount[letter] ?? 0) + 1;
}
  
  for (let index = 0; index < anagramsLowerCase.length; index++) {
    if(word.length === anagrams[index].length) {
    const anagramLetterCount = {}; // will contain individual letters 

    let isValidAnagram;
      
    if(wordLowerCase !== anagramsLowerCase[index]) { 
     isValidAnagram = true } else {
       isValidAnagram = false
    };
      
    for (const letter of anagramsLowerCase[index]) {
      anagramLetterCount[letter] = (anagramLetterCount[letter] ?? 0) + 1;
    }
    for (const [key, value] of Object.entries(wordLetterCount)) {
      
      if(wordLetterCount[key] !== anagramLetterCount[key]) {
        isValidAnagram = false;
        };
    }
      if(isValidAnagram) {
        correctAnagrams.push(anagrams[index])
      };
    
      // correctAnagrams.push(anagrams[index]
    
    }  
  }
  
  return correctAnagrams;
};
