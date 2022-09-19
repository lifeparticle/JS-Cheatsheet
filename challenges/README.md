The following challenges are from the [Modern-Javascript](https://www.udemy.com/course/modern-javascript/) course.

1. String concatenation

```js
let city = 'Melbourne';
let country = 'Australia';
let loc = city + ', ' + country;

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

let celsius = (fahrenheit - 32) * (5/9);
let kelvin =  (fahrenheit + 459.67) * (5/9);

console.log(celsius+'c');
console.log(kelvin+'k');
```

4. Comparison operators

```js
let age = 12;

let isChild = age <= 7;
let isSenior = age >= 65;

console.log('isChild ' + isChild);
console.log('isSenior ' + isSenior);
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
    return (fahrenheit - 32) * (5/9);
}

console.log(convertFahrenheitToCelsius(32)); // 0
console.log(convertFahrenheitToCelsius(68)); // 20
```

9. Default parameters

```js
let calcTip = function (total, tipPercent=0.2) {
    return total * tipPercent;
}

console.log(calcTip(100)); // 20
console.log(calcTip(200)); // 40
```

10. Template strings

```js
let calcTip = function (total, tipPercent=0.2) {
    return `A ${0.2*100} tip on \$${total} would be \$${total * tipPercent}`;
}

console.log(calcTip(100)); // 20
console.log(calcTip(200)); // 40
```

11. Function and Template strings

```js
let calcScore = function (score, total) {
    let percentage = (score / total) * 100;
    let grade = '';
    if (percentage >= 90 && percentage <= 100) {
        grade = 'A';
    } else if (percentage >= 80 && percentage <= 89) {
        grade = 'B';
    } else if (percentage >= 70 && percentage <= 79) {
        grade = 'C';
    } else if (percentage >= 60 && percentage <= 69) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return `You got a ${grade} (${percentage}%)`;
}

console.log(calcScore(15, 20)); // You got a C (75%)
```

12. Object

```js
let person = {
    name: 'Andrew',
    age: 26,
    location: 'Philadelphia'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age = person.age + 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
```

13.

```js



```

14.

```js



```

15.

```js



```

16.

```js



```


17.

```js



```


18.

```js



```


19.

```js



```

20.

```js



```
