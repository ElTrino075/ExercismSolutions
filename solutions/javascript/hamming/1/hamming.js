//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand1, strand2) => {

  const strand1Array = [...strand1];
  const strand2Array = [...strand2];

if (strand1Array.length !== strand2Array.length) {
  throw new Error('strands must be of equal length');
}
  
  if (strand1Array === strand2Array) {
    return 0
  };
  

  let hamming = 0;



  for (let index = 0; index < strand1Array.length; index++) {
    if (strand1Array[index] !== strand2Array[index]) {
      hamming ++;
    }
  }
  
  return hamming;
  
};
