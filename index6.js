function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;  
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello"));  
console.log(lowercaseFirstLetter("World"));  
console.log(lowercaseFirstLetter("JavaScript"));  
console.log(lowercaseFirstLetter(""));  
