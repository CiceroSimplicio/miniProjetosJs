// FIZZBUZZ

const result = fizzBuzz();
console.log(result);

function fizzBuzz(num) {
    if (typeof num !== 'number') {
        return 'nao e um numero';
    } else if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzBuzz';
    } else if (num % 3 === 0) {
        return 'fizz';
    } else if (num % 5 === 0) {
        return 'buzz';
    } else {
        return num;
    }
}