//exercise to create a prompt that cehcks if the name of the guest is part of the guest list//

var guestName = prompt("What is your name?"); //creates a prompt asking the user for their name//

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]; //array of guest list//

// conditional statement
if (guestList.includes(guestName)) {
    alert("Welcome " + guestName)
} else {
    alert("Sorry " + guestName + " maybe, next time.")
}


// Keep in mind that this exercise needs to be run in a snippet editor or browser console. The prompt function is not supported in all environments.//