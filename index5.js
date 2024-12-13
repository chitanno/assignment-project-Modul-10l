function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
let numbers = [5, 3, 8, 1, 6];
let sortedNumbers = sortArrayDescending(numbers);
console.log(sortedNumbers);
