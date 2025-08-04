var output = []; // We declare an array to store our results.

function fizzBuzz() {
    for (var count = 1; count <= 100; count++) { // We loop through numbers 1 to 100.
        if (count % 3 === 0 && count % 5 === 0) { // Check for both 3 and 5 first.
            output.push("FizzBuzz");
        } else if (count % 3 === 0) { // Then check for just 3.
            output.push("Fizz");
        } else if (count % 5 === 0) { // Then check for just 5.
            output.push("Buzz");
        } else { // If none of the above, push the number itself.
            output.push(count);
        }
    }

    console.log(output); // Finally, log the complete array to the console.
}

fizzBuzz(); // Call the function to run it.