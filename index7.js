function findAverage(arr) {
    if (arr.length === 0) return 0;  
    const sum = arr.reduce((acc, num) => acc + num, 0);  
    return sum / arr.length;  
}
console.log(findAverage([1, 2, 3, 4, 5]));  
console.log(findAverage([10, 20, 30]));     
console.log(findAverage([7, 8]));           
console.log(findAverage([]));               