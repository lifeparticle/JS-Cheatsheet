The following challenges are from the [Modern-Javascript](https://www.udemy.com/course/modern-javascript/) course.

- [1. String concatenation](#1-string-concatenation)
- [2. Calculate percentage](#2-calculate-percentage)
- [3. Temperature converter](#3-temperature-converter)
- [4. Comparison operators](#4-comparison-operators)
- [5. If statements](#5-if-statements)
- [6. Advanced If statements](#6-advanced-if-statements)
- [7. Logical and (&&) and or (||)](#7-logical-and--and-or-)
- [8. Temperature converter function](#8-temperature-converter-function)
- [9. Default parameters](#9-default-parameters)
- [10. Template strings](#10-template-strings)
- [11. Function and Template strings](#11-function-and-template-strings)
- [12. Object](#12-object)
- [13. Function and object](#13-function-and-object)
- [14. Object reference](#14-object-reference)
- [15. String methods and properties](#15-string-methods-and-properties)
- [16. Random numbers](#16-random-numbers)
- [17. Array](#17-array)
- [18. Array methods](#18-array-methods)
- [19. forEach method](#19-foreach-method)
- [20. For loop](#20-for-loop)
- [21. findIndex and splice method](#21-findindex-and-splice-method)
- [22. Filtering Array of objects](#22-filtering-array-of-objects)
- [23. Sorting Array of objects](#23-sorting-array-of-objects)
- [24. Array of objects manipulation](#24-array-of-objects-manipulation)
- [25. Remove items from DOM](#25-remove-items-from-dom)
- [26. Add items to DOM](#26-add-items-to-dom)
- [27. Event handling - Button](#27-event-handling---button)
- [28. Event handling - Input](#28-event-handling---input)
- [29. Event handling - Input and Filtering](#29-event-handling---input-and-filtering)
- [30. Event handling - Form](#30-event-handling---form)
- [31. Event handling - Checkbox](#31-event-handling---checkbox)
- [32. Local Storage](#32-local-storage)
- [33. JS Refactor](#33-js-refactor)
- [34. Complex DOM rendering](#34-complex-dom-rendering)
- [35. UUID](#35-uuid)
- [36. Location](#36-location)
- [37. Sync Localstorage](#37-sync-localstorage)
- [38. Moment JS](#38-moment-js)
- [39. Moment JS](#39-moment-js)
- [40. Arrow Functions](#40-arrow-functions)
- [41. Arrow Functions](#41-arrow-functions)
- [42. Ternary operator](#42-ternary-operator)
- [43. Ternary operator](#43-ternary-operator)
- [44. Truty and Falsy values](#44-truty-and-falsy-values)
- [45. Type checking](#45-type-checking)
- [46. Try Catch](#46-try-catch)
- [47. Constructor Functions](#47-constructor-functions)
- [48. Prototype Inheritance](#48-prototype-inheritance)
- [49. Prototype Inheritance and Keypress EventListener](#49-prototype-inheritance-and-keypress-eventlistener)
- [50. Hangman game](#50-hangman-game)
- [51. Hangman game with status logic](#51-hangman-game-with-status-logic)
- [52. Hangman game with status UI](#52-hangman-game-with-status-ui)
- [53. Hangman Class](#53-hangman-class)
- [54. Class and Subclass](#54-class-and-subclass)
- [55. Hangman getters and setters](#55-hangman-getters-and-setters)
- [56. HTTP requests](#56-http-requests)
- [57. HTTP requests - callback functions](#57-http-requests---callback-functions)
- [58. Closures](#58-closures)
- [59. HTTP requests - promises](#59-http-requests---promises)
- [60. HTTP requests - Fecth API](#60-http-requests---fecth-api)
- [61. HTTP requests - Fecth API](#61-http-requests---fecth-api)
- [62. HTTP requests - promises](#62-http-requests---promises)
- [63. HTTP requests - async/await](#63-http-requests---asyncawait)
- [64. HTTP requests - async/await](#64-http-requests---asyncawait)
- [65. Hangman - reset option](#65-hangman---reset-option)
- [66. Hangman - CSS](#66-hangman---css)

### 1. String concatenation

```js
let city = "Melbourne";
let country = "Australia";
let loc = city + ", " + country;

console.log(loc); // Melbourne, Australia
```

### 2. Calculate percentage

```js
let studentScore = 18;
let maxScore = 20;
let percentage = (18 / 20) * 100;

console.log(percentage); // 90
```

### 3. Temperature converter

```js
let fahrenheit = 32;

let celsius = (fahrenheit - 32) * (5 / 9);
let kelvin = (fahrenheit + 459.67) * (5 / 9);

console.log(celsius + "c");
console.log(kelvin + "k");
```

### 4. Comparison operators

```js
let age = 12;

let isChild = age <= 7;
let isSenior = age >= 65;

console.log("isChild " + isChild);
console.log("isSenior " + isSenior);
```

### 5. If statements

```js
let age = 65;

if (age <= 7) {
    console.log("Child discount");
}

if (age >= 65) {
    console.log("Senior discount");
}
```

### 6. Advanced If statements

```js
let temp = 45;

if (temp <= 32) {
    console.log("It is freezing outside");
} else if (temp >= 110) {
    console.log("it is hot outside");
} else {
    console.log("Go for it. It is pretty nice out.");
}
```

### 7. Logical and (&&) and or (||)

```js
let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Only offer vegan dishes.");
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Offer vegan dishes.");
} else {
    console.log("Offer any dishes.");
}
```

### 8. Temperature converter function

```js
let convertFahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
};

console.log(convertFahrenheitToCelsius(32)); // 0
console.log(convertFahrenheitToCelsius(68)); // 20
```

### 9. Default parameters

```js
let calcTip = function (total, tipPercent = 0.2) {
    return total * tipPercent;
};

console.log(calcTip(100)); // 20
console.log(calcTip(200)); // 40
```

### 10. Template strings

```js
let calcTip = function (total, tipPercent = 0.2) {
    return `A ${0.2 * 100} tip on \$${total} would be \$${total * tipPercent}`;
};

console.log(calcTip(100)); // 20
console.log(calcTip(200)); // 40
```

### 11. Function and Template strings

```js
let calcScore = function (score, total) {
    let percentage = (score / total) * 100;
    let grade = "";
    if (percentage >= 90 && percentage <= 100) {
        grade = "A";
    } else if (percentage >= 80 && percentage <= 89) {
        grade = "B";
    } else if (percentage >= 70 && percentage <= 79) {
        grade = "C";
    } else if (percentage >= 60 && percentage <= 69) {
        grade = "D";
    } else {
        grade = "F";
    }
    return `You got a ${grade} (${percentage}%)`;
};

console.log(calcScore(15, 20)); // You got a C (75%)
```

### 12. Object

```js
let person = {
    name: "Andrew",
    age: 26,
    location: "Philadelphia",
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
person.age = person.age + 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
```

### 13. Function and object

```js
const calcTemp = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit + 459.67) * (5 / 9),
    };
};

let result = calcTemp(32);
console.log(
    `fahrenheit: ${result.fahrenheit} celsius: ${result.celsius} kelvin: ${result.kelvin}`
);
```

### 14. Object reference

```js
let myAccount = {
    name: "Andrew Mead",
    expenses: 0,
    income: 0,
};

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
};

let addIncome = function (account, income) {
    account.income = account.income + income;
};

let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
};

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has \$${balance}. $${account.income} in income. \$${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
```

### 15. String methods and properties

```js
let isValidPassword = function (value) {
    return value.length > 8 && !value.includes("password");
};

console.log(isValidPassword("asdfp")); // false
console.log(isValidPassword("abc123!@#$%^&")); // true
console.log(isValidPassword("asdfasdfpoijpassword")); // false
```

### 16. Random numbers

```js
let makeGuess = function (guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return guess === randomNum;
};

console.log(makeGuess(1));
```

### 17. Array

```js
let todos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"];

console.log(`Todo: ${todos[0]}`);
console.log(`Todo: ${todos[todos.length - 2]}`);
```

### 18. Array methods

```js
let todos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"];

// delete the third item
console.log(todos.splice(2, 1)); // ["todo 3"]
console.log(todos); // ["todo 1", "todo 2", "todo 4", "todo 5"]

// add a new item onto the end
console.log(todos.push("todo 6")); // 5
console.log(todos); // ["todo 1", "todo 2", "todo 4", "todo 5", "todo 6"]

// remove the first item from the list
console.log(todos.shift()); // todo 1
console.log(todos); // ["todo 2", "todo 4", "todo 5", "todo 6"]
```

### 19. forEach method

```js
let todos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"];

// delete the third item
console.log(todos.splice(2, 1)); // ["todo 3"]
console.log(todos); // ["todo 1", "todo 2", "todo 4", "todo 5"]

// add a new item onto the end
console.log(todos.push("todo 6")); // 5
console.log(todos); // ["todo 1", "todo 2", "todo 4", "todo 5", "todo 6"]

// remove the first item from the list
console.log(todos.shift()); // todo 1
console.log(todos); // ["todo 2", "todo 4", "todo 5", "todo 6"]

todos.forEach((todo, index) => {
    console.log(`${index + 1}: ${todo}`);
});

/*
1: todo 2
2: todo 4
3: todo 5
4: todo 6
*/
```

### 20. For loop

```js
let todos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"];

// delete the third item
console.log(todos.splice(2, 1)); // ["todo 3"]
console.log(todos); // ["todo 1", "todo 2", "todo 4", "todo 5"]

// add a new item onto the end
console.log(todos.push("todo 6")); // 5
console.log(todos); // ["todo 1", "todo 2", "todo 4", "todo 5", "todo 6"]

// remove the first item from the list
console.log(todos.shift()); // todo 1
console.log(todos); // ["todo 2", "todo 4", "todo 5", "todo 6"]

for (let index = 0; index < todos.length; index++) {
    console.log(`${index + 1}: ${todos[index]}`);
}

/*
1: todo 2
2: todo 4
3: todo 5
4: todo 6
*/
```

### 21. findIndex and splice method

```js
let todos = [
    {
        text: "todo 1",
        completed: true,
    },
    {
        text: "todo 2",
        completed: true,
    },
    {
        text: "todo 3",
        completed: true,
    },
    {
        text: "todo 4",
        completed: true,
    },
    {
        text: "todo 5",
        completed: true,
    },
];

// Create function to remove a todo by text value

const deleteTodo = (notes, text) => {
    let index = notes.findIndex((note, index) => {
        return note.text.toLowerCase() === text.toLowerCase();
    });

    if (index !== -1) {
        notes.splice(index, 1);
    }
};

deleteTodo(todos, "todo 1");
console.log(todos); // [{text: "todo 2", completed: true}, {text: "todo 3", completed: true}, {text: "todo 4", completed: true}, {text: "todo 5", completed: true}]
```

### 22. Filtering Array of objects

```js
let todos = [
    {
        text: "todo 1",
        completed: true,
    },
    {
        text: "todo 2",
        completed: true,
    },
    {
        text: "todo 3",
        completed: false,
    },
    {
        text: "todo 4",
        completed: true,
    },
    {
        text: "todo 5",
        completed: false,
    },
];

const getThingsToDo = (todos) => {
    return todos.filter((todo, index) => {
        return todo.completed === false;
    });
};

console.log(getThingsToDo(todos)); // [{text: "todo 3", completed: false}, {text: "todo 5", completed: false}]
```

### 23. Sorting Array of objects

```js
let todos = [
    {
        text: "todo 1",
        completed: true,
    },
    {
        text: "todo 2",
        completed: true,
    },
    {
        text: "todo 3",
        completed: false,
    },
    {
        text: "todo 4",
        completed: true,
    },
    {
        text: "todo 5",
        completed: false,
    },
];

const sortTodos = (todos) => {
    return todos.sort((a, b) => {
        if (a.completed === false && b.completed === true) {
            return -1;
        } else if (b.completed === false && a.completed === true) {
            return -1;
        } else {
            return 0;
        }
    });
};

sortTodos(todos);
console.log(todos); // [{text: "todo 3", completed: false}, {text: "todo 5", completed: false}, {text: "todo 1", completed: true}, {text: "todo 2", completed: true}, {text: "todo 4", completed: true}]
```

### 24. Array of objects manipulation

```js
const account = {
    name: "Andrew Mead",
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount,
        });
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount,
        });
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncome = 0;
        let accountBalance = 0;

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount;
        });

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount;
        });

        accountBalance = totalIncome - totalExpenses;

        return `${this.name} has a balance of \$${accountBalance}. \$${totalIncome} in income. \$${totalExpenses} in expenses.`;
    },
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary()); // Andrew Mead has a balance of $48. $1000 in income. $952 in expenses.
```

### 25. Remove items from DOM
[Remove items from DOM](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/25)

### 26. Add items to DOM
[Add items to DOM](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/26)

### 27. Event handling - Button
[Event handling - Button](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/27)

### 28. Event handling - Input
[Event handling - Input](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/28)

### 29. Event handling - Input and Filtering
[Event handling - Input and Filtering](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/29)

### 30. Event handling - Form
[Event handling - Form](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/30)

### 31. Event handling - Checkbox
 [Event handling - Checkbox](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/31)

### 32. Local Storage
[Local Storage](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/32)

### 33. JS Refactor
[JS Refactor](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/33)

### 34. Complex DOM rendering
[Complex DOM rendering](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/34)

### 35. UUID
[UUID](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/35)

### 36. Location
[Location](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/36)

### 37. Sync Localstorage
[Sync Localstorage](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/37)

### 38. Moment JS
[Moment JS](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/38)

### 39. Moment JS
[Moment JS](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/39)

### 40. Arrow Functions

```js
const people = [{
    name: "Tom",
    age: 22
}, {
    name: "Bob",
    age: 44
}, {
    name: "Rob",
    age: 20
}]

const age = people.filter((person) => person.age === 22);
console.log(age);
```

### 41. Arrow Functions
[ Arrow Functions](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/41)

### 42. Ternary operator

```js
let teamSize = 4;
let message = teamSize <= 3 ? "Team size: 3" : "Too many poeple on your team";
console.log(message); // Too many poeple on your team
```

### 43. Ternary operator
[Ternary operator](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/43)

### 44. Truty and Falsy values
[Truty and Falsy values](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/44)

### 45. Type checking

```js
let calcScore = function (score, total) {

    if (typeof score !== 'number' || typeof total !== 'number') {
        throw Error("Not a number");
    }
    
    let percentage = (score / total) * 100;
    let grade = "";
    if (percentage >= 90 && percentage <= 100) {
        grade = "A";
    } else if (percentage >= 80 && percentage <= 89) {
        grade = "B";
    } else if (percentage >= 70 && percentage <= 79) {
        grade = "C";
    } else if (percentage >= 60 && percentage <= 69) {
        grade = "D";
    } else {
        grade = "F";
    }
    return `You got a ${grade} (${percentage}%)`;
};


try {
    console.log(calcScore(15, 20)); // You got a C (75%)
    console.log(calcScore('', 20));
} catch (e) {
    console.log(e); // Error: Not a number
}
```

### 46. Try Catch
[Try Catch](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/46)

### 47. Constructor Functions

```js
const Hangman = function(word, remainingGuesses) {
    this.word = word;
    this.remainingGuesses = remainingGuesses;
}

const game1 = new Hangman('Cat', 2);
console.log(game1); // Hangman {word: "Cat", remainingGuesses: 2}
```

### 48. Prototype Inheritance

```js
const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    })

    return puzzle;
}

const game1 = new Hangman('Cat', 2);
console.log(game1); // Hangman {word: "Cat", remainingGuesses: 2}
console.log(game1.getPuzzle()); // ***
```

### 49. Prototype Inheritance and Keypress EventListener

```js
const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    })

    return puzzle;
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);
    
    if (isUnique) {
        this.guessedLetters.push(guess)
    }
    
    if(isUnique && isBadGuess) {
        this.remainingGuesses--;
    }
}

const game1 = new Hangman('Cat', 2);

window.addEventListener('keypress', (e) => {
    game1.makeGuess(String.fromCharCode(e.charCode));
    console.log(game1.getPuzzle());
    console.log(game1.remainingGuesses);
})
```

### 50. Hangman game
[Hangman game](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/50)

### 51. Hangman game with status logic
[Hangman game with status logic](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/51)

### 52. Hangman game with status UI
[Hangman game](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/52)

### 53. Hangman Class
[Hangman Class](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/53)

### 54. Class and Subclass
[Class and Subclass](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/54)

### 55. Hangman getters and setters
[Hangman getters and setters](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/55)

### 56. HTTP requests

```js
const countryCode = "US";

const countryRequest = new XMLHttpRequest();
countryRequest.addEventListener("readystatechange", (e) => {
	if (e.target.readyState === 4 && e.target.status === 200) {
		const data = JSON.parse(e.target.responseText);
		const country = data.find((country) => country.cca2 == countryCode);
		console.log(country.name.official); // United States of America
	} else if (e.target.readyState === 4) {
		console.log("error");
	}
});
countryRequest.open("GET", "https://restcountries.com/v3.1/all");
countryRequest.send();
```

### 57. HTTP requests - callback functions

```js
const getCountry = (countryCode, callback) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country)
        } else if (e.target.readyStatet === 4) {
            callback('Unable to fetch  data')
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
}


getCountry('MX', (error, country) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Country name: ${country.name}`)
    }
})
```

### 58. Closures

```js
const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount;
    }
}

const tip20 = createTipper(0.2);
const tip30 = createTipper(0.3);

console.log(tip20(100));
console.log(tip30(100));
```

### 59. HTTP requests - promises

```js
const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country)
        } else if (e.target.readyStatet === 4) {
            reject('Unable to fetch data')
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
})


getCountry('MX').then((country) => {
    console.log(country.name)
}, (err) => {
    console.log(`Error: ${err}`)
})
```

### 60. HTTP requests - Fecth API
[HTTP requests - Fecth API](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/60)

### 61. HTTP requests - Fecth API
[HTTP requests - Fecth API](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/61)

### 62. HTTP requests - promises
[HTTP requests - promises](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/62)

### 63. HTTP requests - async/await
[HTTP requests - async/await](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/63)

### 64. HTTP requests - async/await
[HTTP requests - async/await](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/64)

### 65. Hangman - reset option
[Hangman - reset option](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/65)

### 66. Hangman - CSS
[Hangman - CSS](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/66)
