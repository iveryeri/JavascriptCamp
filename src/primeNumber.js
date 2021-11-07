function isPrime(number) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); ++i) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && number != 1) {
        return true;
    } else {
        return false
    }
}

function isPerfect(number) {
    let isPerfect = true;
    let total = 0;
    for (let i = 1; i <= number / 2; ++i) {
        if (number % i == 0) {
            total += i;
        }
    }
    if (number == total) {
        return true
    } else {
        return false
    }
}

function areFriends(number1, number2) {
    let total1 = 0;
    let total2 = 0;
    for (let i = 1; i <= number1 / 2; ++i) {
        if (number1 % i == 0) {
            total1 += i;
        }
    }
    for (let i = 1; i <= number2 / 2; ++i) {
        if (number2 % i == 0) {
            total2 += i;
        }
    }

    if (number1 == total2 && number2 == total1) {
        console.log(number1 + " and " + number2 + " are friend numbers.");
    } else {
        console.log(number1 + " and " + number2 + " are NOT friend numbers.");
    }
}

function findPrimes(...numbers) {
    for (let i = 0; i < numbers.length; ++i) {
        if (isPrime(numbers[i])) {
            console.log(numbers[i] + " is prime")
        } else {
            console.log(numbers[i] + " is NOT prime")
        }
    }
}

function listPrimes(counter) {
    for (let i = 1; i <= counter; ++i) {
        if (isPrime(i)) {
            console.log(i + " is prime");
        }
    }
}

function listPerfects(counter) {
    for (let i = 1; i <= counter; ++i) {
        if (isPerfect(i)) {
            console.log(i + " is a perfect number");
        }
    }
}


console.log("Question 1 - Check if prime:");
findPrimes(100, 101, 654, 12691, 12697, 2, 13, 19);

console.log("\nQuestion 2 - Are they friend numbers:");
areFriends(220, 110);
areFriends(100, 150);
areFriends(220, 284);
areFriends(1184, 1210);
areFriends(17296, 18416);

console.log("\nQuestion 3 - Perfect numbers until 1000:");
listPerfects(1000);

console.log("\nQuestion 4 - Prime numbers until 1000:");
listPrimes(1000);


