
function fibonacciSequence(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n); // Ensures only the first `n` numbers are returned
}

// Example usage:
let n = 10; // Number of terms in the sequence
console.log(fibonacciSequence(n));




