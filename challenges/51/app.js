const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Cat', 2);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.remainingGuesses;

window.addEventListener('keypress', (e) => {
    game1.makeGuess(String.fromCharCode(e.charCode));
    puzzleEl.textContent = game1.getPuzzle();
    guessesEl.textContent = game1.remainingGuesses;
})
