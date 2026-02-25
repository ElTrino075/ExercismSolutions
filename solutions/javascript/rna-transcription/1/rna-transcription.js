//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DnaToRna = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}

export const toRna = (dna) => {
   return dna
  .split("")
  .map((nucleotide) => DnaToRna[nucleotide] )
  .join("");
};
