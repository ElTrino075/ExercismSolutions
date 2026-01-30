// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number..
 */
export function randomShipRegistryNumber() {
  let registry = Math.floor(1000 + Math.random() * (9999 - 1000))
  
  return `NCC-${registry}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  let starDate = 41000 + Math.random() * (41999 - 41000);
  
  return starDate;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  
  // const planetNumber = Math.floor(Math.random() * 10) + 1; // 1..10 inclusive

  const planetaryArray = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  const planetNumber = Math.floor(Math.random() * planetaryArray.length); // 0..9
  

  return planetaryArray[planetNumber];
}
