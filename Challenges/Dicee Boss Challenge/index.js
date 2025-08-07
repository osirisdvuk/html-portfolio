// index.js

// Function to generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update dice images and declare winner
function playGame() {
    // Generate random numbers for both players
    const player1Result = rollDice();
    const player2Result = rollDice();

    // Update the dice images
    document.querySelector('.img1').src = `./images/dice${player1Result}.png`;
    document.querySelector('.img2').src = `./images/dice${player2Result}.png`;

    // Determine and display the winner
    let titleText;
    if (player1Result > player2Result) {
        titleText = "🚩 Player 1 Wins!";
    } else if (player2Result > player1Result) {
        titleText = "Player 2 Wins! 🚩";
    } else {
        titleText = "Draw!";
    }

    // Update the heading
    document.querySelector('h1').textContent = titleText;
}

// Run the game when the page loads
window.onload = playGame;

// Also run the game when the page is refreshed
// (This is already handled by window.onload, included for clarity)
