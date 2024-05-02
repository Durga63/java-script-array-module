function uniqueValues(arr) {
  return Array.from(new Set(arr));
}

let arr2 = [1, 2, 3, 3, 4, 5, 5,6];
console.log(uniqueValues(arr2));
