const { debug } = require('console');

let nums = [-1,2,1,-4]
let target = 1
//  输出2
//  解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let ans = []
  const len = nums.length
  if (len <= 3) return null
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    let L = i + 1
    let R = len - 1
    
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      sum >= target ? (ans[sum - target] =sum, R--) : (ans[target - sum] = sum, L++)
    }
  }
  return ans.find(v => v!=undefined)
};
console.log(threeSumClosest(nums, target));
