const numbers = [1, 4, 5, 1, 2, 10, 12, 15, 11, 13, 11, 5];
console.log('numbers', numbers);

// Sum of all odd numbers in array
const odds = numbers.filter((number) => number % 2 !== 0);
console.log('odds:', odds, 'sum:', odds.reduce((accumulator, currentValue) => accumulator + currentValue));

// Sum of all unique odd numbers in array
const uniques = numbers.filter((number, index) => numbers.indexOf(number) === index);
console.log('uniques:', uniques, 'sum:', uniques.reduce((accumulator, currentValue) => accumulator + currentValue));
