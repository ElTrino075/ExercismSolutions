//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
                                                

export function countNucleotides(strand) {
  // const dnaArray = strand.split("");
  const dnaArray = [...strand]

  const counts = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  }

  for (const dna of dnaArray) {
    if(counts[dna] === undefined) {
      throw new Error('Invalid nucleotide in strand')
    } else {
      counts[dna]++
    }
  }
    return `${counts.A} ${counts.C} ${counts.G} ${counts.T}`
}
