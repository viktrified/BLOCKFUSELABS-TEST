let input1 = ["flower", "flow", "flight"];
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
console.log(findLongestPrefix(input1));
