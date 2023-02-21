//bubble sort

let myfunc = (str) => {
  let splitedarray = str.split(" ");
  let longest = 0;
  let longestString;
  for (let i = 0; i < splitedarray.length; i++) {
    if (splitedarray[i].length > longest) {
      longest = splitedarray[i].length;
      longestString = splitedarray[i];
    }
  }
  return `Longest String is "${longestString}" with "${longest}" chracters.`;
};

let string = "my name is atif jalal";
console.log(myfunc(string));
