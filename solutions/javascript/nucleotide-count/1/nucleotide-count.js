//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// ToDo: checken of split inderdaad een aparte array oplevert ==> zie code daar, beide werken
//                                                       maar ...strand is mooier

// refactor:
// counts object met {A: 0, C: 0, G: 0, T: 0}
// count[dna] om te benaderen, counts[dna]++ doen
// in de return ${counts.A} etc

export function countNucleotides(strand) {
  // const dnaArray = strand.split("");
  const dnaArray = [...strand]

  const isValid = {
    A: true,
    C: true,
    G: true,
    T: true,
  }

  let a = 0;
  let c = 0;
  let g = 0;
  let t = 0;

  for (const dna of dnaArray) {
    if(isValid[dna]) {
      switch (dna) {
        case 'A':
          a++
          break;
        case 'C':
          c++
          break;
        case 'G':
          g++
          break;
        case 'T':
          t++
        break;
      }
    } else {
      throw new Error('Invalid nucleotide in strand')
    }
  }

  return `${a} ${c} ${g} ${t}`;
}
