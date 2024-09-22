// Configuration du jeu
const correctCharacter = "Steve Jobs"; // Le nom du personnage à deviner
let blurLevel = 30; // Niveau initial de flou
let score = 100; // Score initial
let hintIndex = 0; // Compteur pour les indices

// Liste des indices
const hints = [
    "Clue 1: He co-founded one of the largest technology companies.",
    "Clue 2: He is known for his product presentations.",
    "Clue 3: He played a key role in the creation of the iPhone.",
    "Clue 4: He often wore a black turtleneck.",
    "Clue 5: He revolutionized the music industry with the iPod."
];

// Sélection des éléments HTML
const hiddenImage = document.getElementById('hiddenImage');
const guessInput = document.getElementById('guessInput');
const submitButton = document.getElementById('submitGuess');
const resultMessage = document.getElementById('resultMessage');
const scoreValue = document.getElementById('scoreValue');
const winMessage = document.getElementById('winMessage'); // Message de victoire
const hintMessage = document.createElement('p'); // Création d'un élément pour afficher l'indice
document.body.appendChild(hintMessage); // Ajoute l'élément pour les indices dans la page

// Fonction pour soumettre la réponse
submitButton.addEventListener('click', () => {
    const userGuess = guessInput.value.trim().toLowerCase();

    // Vérifie si l'utilisateur a deviné le bon personnage
    if (userGuess === correctCharacter.toLowerCase()) {
        resultMessage.innerText = `Bravo ! Tu as trouvé ${correctCharacter} !`;

        // Déclencher l'animation pour rendre l'image claire
        hiddenImage.classList.add('clear-image');

        // Afficher le message de victoire avec l'animation
        winMessage.classList.add('win-animation');

        submitButton.disabled = true; // Désactiver le bouton après avoir gagné
    } else {
        // Mauvaise réponse : Réduit le flou et le score
        resultMessage.innerText = "Mauvaise réponse, essaie encore.";
        blurLevel -= 5; // Diminue le flou
        hiddenImage.style.filter = `blur(${blurLevel}px)`;

        // Diminue le score
        score -= 10;
        scoreValue.innerText = score;

        // Affiche l'indice suivant
        if (hintIndex < hints.length) {
            hintMessage.innerText = hints[hintIndex];
            hintIndex++;
        }

        // Si le score tombe à 0, le jeu se termine
        if (score <= 0) {
            resultMessage.innerText = `Tu n'as plus de points ! La réponse était ${correctCharacter}.`;
            submitButton.disabled = true; // Désactive le bouton si score atteint 0
        }
    }

    // Vide le champ de saisie après chaque tentative
    guessInput.value = "";
});