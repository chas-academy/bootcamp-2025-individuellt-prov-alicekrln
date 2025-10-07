// returna strängens längd
export function measureString(string) {
    return string.length;
}

// returna arrayens längd
export function measureArray(array) {
    return array.length;
}

console.log(measureString("abcdefg"));
console.log(measureArray([12, 5, 6]));