let myFunc = (arr1, arr2) => {
  let sameElements = [];
  for (const i in arr1) {
    for (const j in arr2) {
      if (arr1[i] === arr2[j] && !sameElements.includes(arr1[i])) {
        sameElements.push(arr1[i]);
      }
    }
  }

  return sameElements;
};

let array1 = [2, 3, 4, 5, 6, 7, 9, 10];
let array2 = [1, 3, 4, 5, 9, 7, 6, 10];

console.log(myFunc(array1, array2));
