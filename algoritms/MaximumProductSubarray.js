// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

//O(n) O(1) solution
function maxProduct(arr) {
  let prevMax = arr[0];
  let prevMin = arr[0];
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prevMax = Math.max(prevMax * arr[i], arr[i], prevMin * arr[i]); //2
    prevMin = Math.min(prevMax * arr[i], arr[i], prevMin * arr[i]); //-2

    result = Math.max(prevMax, result);
  }

  return result;
}

console.log(maxProduct([-2, 0, -1]));

//brute force
var maxProductB = function (nums) {
  let result = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let mul = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      result = Math.max(result, mul);
      mul *= nums[j];
    }

    result = Math.max(result, mul);
  }

  return result;
};

console.log(maxProductB([-2, 0, -1, -15]));
