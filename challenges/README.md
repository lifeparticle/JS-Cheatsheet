The following challenges are from the [Modern-Javascript](https://www.udemy.com/course/modern-javascript/) course.

1. String concatenation

```js
let city = "Melbourne";
let country = "Australia";
let loc = city + ", " + country;

console.log(loc); // Melbourne, Australia
```

2. Calculate percentage

```js
let studentScore = 18;
let maxScore = 20;
let percentage = (18 / 20) * 100;

console.log(percentage); // 90
```

3. Temperature converter

```js
let fahrenheit = 32;

let celsius = (fahrenheit - 32) * (5 / 9);
let kelvin = (fahrenheit + 459.67) * (5 / 9);

console.log(celsius + "c");
console.log(kelvin + "k");
```

4. Comparison operators

```js
let age = 12;

let isChild = age <= 7;
let isSenior = age >= 65;

console.log("isChild " + isChild);
console.log("isSenior " + isSenior);
```

5. If statements

```js
let age = 65;

if (age <= 7) {
    console.log("Child discount");
}

if (age >= 65) {
    console.log("Senior discount");
}
```

6. Advanced If statements

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

7. Logical and (&&) and or (||)

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

8. Temperature converter function

```js
let convertFahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
};

console.log(convertFahrenheitToCelsius(32)); // 0
console.log(convertFahrenheitToCelsius(68)); // 20
```

9. Default parameters

```js
let calcTip = function (total, tipPercent = 0.2) {
    return total * tipPercent;
};

console.log(calcTip(100)); // 20
console.log(calcTip(200)); // 40
```

10. Template strings

```js
let calcTip = function (total, tipPercent = 0.2) {
    return `A ${0.2 * 100} tip on \$${total} would be \$${total * tipPercent}`;
};

console.log(calcTip(100)); // 20
console.log(calcTip(200)); // 40
```

11. Function and Template strings

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

12. Object

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

13. Function and object

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

14. Object reference

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

15. String methods and properties

```js
let isValidPassword = function (value) {
    return value.length > 8 && !value.includes("password");
};

console.log(isValidPassword("asdfp")); // false
console.log(isValidPassword("abc123!@#$%^&")); // true
console.log(isValidPassword("asdfasdfpoijpassword")); // false
```

16. Random numbers

```js
let makeGuess = function (guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return guess === randomNum;
};

console.log(makeGuess(1));
```

17. Array

```js
let todos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"];

console.log(`Todo: ${todos[0]}`);
console.log(`Todo: ${todos[todos.length - 2]}`);
```

18. Array methods

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

19. forEach method

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

20. For loop

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

21. findIndex and splice method

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

22. Filtering Array of objects

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

23. Sorting Array of objects

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

24. Array of objects manipulation

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

25. [Remove items from DOM](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/25)

26. [Add items to DOM](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/26)

27. [Event handling - Button](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/27)

28. [Event handling - Input](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/28)

29. [Event handling - Input and Filtering](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/challenges/29)

30.

```js

```
