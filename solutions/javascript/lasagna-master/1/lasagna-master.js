/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  // console.log(remainingTime);
  return (remainingTime === '' || remainingTime === null || remainingTime === undefined) ? 
    'You forgot to set the timer.' :
    remainingTime === 0 ? 'Lasagna is done.' : 'Not done, please wait.';
}

// export function cookingStatus(remainingTime) {   
//   return (remainingTime == '' || remainingTime == null ) ? 'You forgot to set the timer.' : remainingTime === 0 ? 'Lasagna is done' : 'Not done, please wait.'; 
// }
// This will not work, because 0 is treated as "no value" with the first check. So as 0 is a valid input now, the various types of Empty need to be explicitly checked.



export function preparationTime(layers, avgPrepTime) {
  // console.log(layers);
  // console.log(avgPrepTime);
  return (avgPrepTime =='' || avgPrepTime == null) ? layers.length * 2 : layers.length * avgPrepTime;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce   = 0;

  // console.log(layers);
  for (let index = 0; index < layers.length; index++) {
    if (layers[index] === 'noodles') { 
      noodles += 50
    } else if (layers[index] === 'sauce') {
      sauce += 0.2
    }
    // console.log('noodles: ' + noodles);
    // console.log('layers: ' + layers);
  }
  return {
      noodles: noodles,
      sauce: sauce,
    };
}

export function addSecretIngredient(friendsList, myList) {
  // console.log(friendsList);
  // console.log(myList);
  myList.push(friendsList[friendsList.length - 1]);
  console.log(myList);
};

export function scaleRecipe(recipe, portions) {
  let factor = portions / 2;

  const newRecipe = {};


  // structure of the for / let loop:
  // for (let key in object) { do stuff }
  // the key can be any name. Just pick a logical one that makes sense :-) 
  for (let ingredient in recipe) {
    newRecipe[ingredient] = recipe[ingredient] * factor;
  }
  return newRecipe;
}
