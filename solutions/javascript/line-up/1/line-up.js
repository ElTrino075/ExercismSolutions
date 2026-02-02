//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, position) => {

  const sNumber = String(position);
  let ordinal;

  switch (true) {

    case sNumber.endsWith('11'):
      ordinal = 'th';
      break;
    case sNumber.endsWith('12'):
      ordinal = 'th';
      break;
    case sNumber.endsWith('13'):
      ordinal = 'th';
      break;
    case sNumber.endsWith('1'):
      ordinal = 'st';
      break;
    case sNumber.endsWith('2'):
      ordinal = 'nd';
      break;
    case sNumber.endsWith('3'):
      ordinal = 'rd';
      break;
    default:
      ordinal = 'th';
      break;
  }

  return `${name}, you are the ${sNumber}${ordinal} customer we serve today. Thank you!`;
};
