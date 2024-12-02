let input1 = ["flower", "flow", "fight"];
let input2 = ["dog", "racecar", "car"];

const findLongestPrefix = (arr) => {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i].substring(0, 2) === arr[j].substring(0, 2)) {
        return arr[i].substring(0, 2);
      } else {
        return "";
      }
    }
  }
};
// console.log(input1[0].substring(0,2))
console.log(findLongestPrefix(input2));
