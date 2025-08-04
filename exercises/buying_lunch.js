/**
 * Selects a random person from an array of names to pay for lunch.
 * @param {string[]} names - An array of strings, where each string is a name.
 * @returns {string} - A string in the format "[Name] is going to buy lunch today!".
 */
function whosPaying(names) {
    // Get the total number of people in the list.
    const numberOfPeople = names.length;

    // Generate a random number between 0 and the number of people,
    // then round down to get a valid index.
    const randomPersonIndex = Math.floor(Math.random() * numberOfPeople);

    // Use the random index to get the name of the person.
    const randomPerson = names[randomPersonIndex];

    // Return the formatted output string.
    return `${randomPerson} is going to buy lunch today!`;
}

// Example usage with the provided input.
// You can assign the result to a variable and then use it.
const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
const lunchPayer = whosPaying(names);

// The 'lunchPayer' variable now holds a string like "Michael is going to buy lunch today!".
// Note: The result will be different each time the function is called.
