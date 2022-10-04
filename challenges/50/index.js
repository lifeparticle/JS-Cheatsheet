const Hangman = function (word, remainingGuesses) {
	this.word = word.toLowerCase().split("");
	this.remainingGuesses = remainingGuesses;
	this.guessedLetters = [];
};

Hangman.prototype.getPuzzle = function () {
	let puzzle = "";

	this.word.forEach((letter) => {
		if (this.guessedLetters.includes(letter) || letter === " ") {
			puzzle += letter;
		} else {
			puzzle += "*";
		}
	});

	return puzzle;
};

Hangman.prototype.makeGuess = function (guess) {
	guess = guess.toLowerCase();
	const isUnique = !this.guessedLetters.includes(guess);
	const isBadGuess = !this.word.includes(guess);

	if (isUnique) {
		this.guessedLetters.push(guess);
	}

	if (isUnique && isBadGuess) {
		this.remainingGuesses--;
	}
};

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("Cat", 2);

guessesEl.textContent = game1.getPuzzle();
console.log(game1.getPuzzle());

window.addEventListener("keypress", (e) => {
	game1.makeGuess(String.fromCharCode(e.charCode));
	console.log(game1.getPuzzle());
	console.log(game1.remainingGuesses);
});
