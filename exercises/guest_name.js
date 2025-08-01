//exercise to create a prompt that cehcks if the name of the guest is part of the guest list//

var guestName = prompt("What is your name?");

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

if (guestList.includes(guestName)) {
    alert("Welcome " + guestName)
} else {
    alert("Sorry " + guestName + " maybe, next time.")
}


