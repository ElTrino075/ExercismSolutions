// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const result = /^chatbot/i.test(command);

  return result;
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  let regex = new RegExp("emoji\\d+", "gi");
  const noEmoji = message.replace(regex,""); 

  return noEmoji;
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const regex = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/;

  const result = regex.test(number) ? "Thanks! You can now download me to your phone." : `Oops, it seems like I can't reach out to ${number}`;

  return result;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const regex = /\b(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s'"<>()]*)?/gi;

  const returnUrl = userInput.match(regex) ?? [];

  return returnUrl;
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const [achternaam, voornaam] = fullName.split(", ");
  const reverse = `${voornaam} ${achternaam}`;

  return `Nice to meet you, ${fullName.replace(fullName, reverse)}`;
}
