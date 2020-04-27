// Collect input from a user
let input = prompt("Please enter a number, so that we can generate a random number from 0 to the one you entered.");

// Convert the input to a number
input = parseInt(input);



if (input) {
    // Use Math.random() and the user's number to generate a random number
    const randomNum = Math.floor(Math.random() * input) + 1;

    // Create a message displaying the random number
    alert(`Here is your ${randomNum} between 1 and ${input}`);

} else {
    console.log("You need to provide a number. Try again.");
}