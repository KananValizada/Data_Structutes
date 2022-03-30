//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function solution1(arr, target) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      return [obj[arr[i]], i];
    } else {
      obj[target - arr[i]] = i;
    }
  }
}

function solution2(arr, target) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) != -1) {
      return [arr.indexOf(target - arr[i]), i];
    } else {
      arr2.push(target - arr[i]);
    }
  }
}

console.log(solution1([5, 4, 3, 2], 7));
console.log(solution2([5, 4, 3, 2], 6));
