// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let preparingTime = 0;

  switch (name) {
    case 'Pure Strawberry Joy':
       preparingTime = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
       preparingTime = 1.5;
      break;
    case 'Tropical Island':
       preparingTime = 3;
      break;
    case 'All or Nothing':
       preparingTime = 5;
      break;
    default:
       preparingTime = 2.5
      break;
  }
  return preparingTime;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limesCut = 0;
  let totalWedges = 0;

  const wedgesPerLime = {
    small: 6,
    medium: 8,
    large: 10,
  };

  while (totalWedges < wedgesNeeded && limesCut < limes.length) {
    totalWedges += wedgesPerLime[limes[limesCut]];
    limesCut++;
  }

  return limesCut;
}


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const preparingTime = {
    'Pure Strawberry Joy': 0.5,
    'Energizer': 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5,
  }

console.log('Begintijd: ' + timeLeft);
  console.log('Orders begin: ' + orders.length);
  
  while (timeLeft > 0) {
    
    const currentOrder = orders[0];

    const time = preparingTime[currentOrder] ?? 2.5;
    timeLeft -= time;
    orders.shift();

    console.log('Tijd over: ' + timeLeft);
    console.log('Orders over: ' + orders.length);
    }
  return orders;
}
