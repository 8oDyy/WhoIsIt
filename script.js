
// Array of characters with their images, names, and clues
const characters = [
    {
        name: 'Bill Gates',
        src: 'Media/bill-gates.jpg',
        clues: [
            "He co-founded a company that popularized the Windows operating system.",
            "His company dominated the office software market with a product suite.",
            "He is one of the richest people in the world and devotes much of his wealth to philanthropy.",
            "He stepped down from his company in 2008 to focus on charity work.",
            "His company also entered the gaming market with the Xbox."
        ]
    },
    {
        name: 'Linus Torvalds',
        src: 'Media/linus-torvalds.jpg',
        clues: [
            "He created the Linux kernel while studying in Finland.",
            "His work became one of the greatest contributions to open-source software.",
            "He doesn't directly manage all developments but remains a key figure.",
            "Linux is used in Android systems, servers, and even some cars.",
            "He also created the widely-used Git version control system."
        ]
    },
    {
        name: 'Steve Jobs',
        src: 'Media/steve-jobs.jpg',
        clues: [
            "He co-founded a company that introduced the personal computer with a revolutionary graphical interface.",
            "He is known for his influence on the smartphone industry with a product that changed communication worldwide.",
            "He also led the development of a popular tablet device and redefined how we consume digital content.",
            "His company, Apple, became one of the most valuable technology companies in the world.",
            "He was known for his keynote presentations and unique vision in product design."
        ]
    }
];

// Variables to track the current character and wrong attempts
let currentCharacter;
let wrongAttempts = 0;

window.onload = function() {
    // Select a random character when the page loads
    currentCharacter = characters[Math.floor(Math.random() * characters.length)];
    document.getElementById('hiddenImage').src = currentCharacter.src;
    wrongAttempts = 0;

    // Hide all clues initially
    document.getElementById('clue1').innerText = "";
    document.getElementById('clue2').innerText = "";
    document.getElementById('clue3').innerText = "";
    document.getElementById('clue4').innerText = "";
    document.getElementById('clue5').innerText = "";

    // Reset image blur
    document.getElementById('hiddenImage').style.filter = "blur(30px)";
};

// Function to check the player's guess
document.getElementById('submitGuess').addEventListener('click', function() {
    const guess = document.getElementById('guessInput').value.trim().toLowerCase();
    
    if (guess === currentCharacter.name.toLowerCase()) {
        document.getElementById('resultMessage').innerText = "Congratulations! You guessed it right!";
        document.getElementById('winMessage').classList.add('win-animation');
        
        // Remove blur completely on correct guess
        document.getElementById('hiddenImage').style.filter = "blur(0)";
    } else {
        document.getElementById('resultMessage').innerText = "Wrong guess, try again!";
        wrongAttempts++;

        // Show clues progressively based on wrong attempts
        if (wrongAttempts === 1) {
            document.getElementById('clue1').innerText = currentCharacter.clues[0];
        } else if (wrongAttempts === 2) {
            document.getElementById('clue2').innerText = currentCharacter.clues[1];
        } else if (wrongAttempts === 3) {
            document.getElementById('clue3').innerText = currentCharacter.clues[2];
        } else if (wrongAttempts === 4) {
            document.getElementById('clue4').innerText = currentCharacter.clues[3];
        } else if (wrongAttempts === 5) {
            document.getElementById('clue5').innerText = currentCharacter.clues[4];
        }

        // Reduce blur after each wrong attempt
        if (wrongAttempts <= 5) {
            let blurValue = 30 - wrongAttempts * 5;  // Decrease blur by 5px each time
            document.getElementById('hiddenImage').style.filter = `blur(${blurValue}px)`;
        }
    }
});