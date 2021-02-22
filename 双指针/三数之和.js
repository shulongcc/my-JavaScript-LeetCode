var nums = [-1, 0, 1, 2, -1, -4]
// 输出
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = [];
  const len = nums.length;
  if(nums == null || len < 3) return ans
  nums.sort((a,b) => a-b)
  for(let i = 0; i < len; i++) {
    if (nums[i] > 0) break // 当前数字大于0，sum大于0 退出
    if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
    let L = i + 1
    let R = len - 1
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        ans.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] == nums[L + 1]) L++; // 去重，直到指向不一样的数
        while (L < R && nums[R] == nums[R - 1]) R--;
        R--
        L++
      } else if (sum < 0) {
        L++; // 和小于0，就是左边值太小了，往右移
      } else if (sum > 0) {
        R--; // 和大于0，就是右边值太大了，往左移
      }
    }
  }
  return ans
};

console.log(threeSum(nums))
