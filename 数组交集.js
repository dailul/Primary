// var intersection = function(nums1, nums2) {
//   const map = {}, ans = [];
//   nums1.forEach(element => {
//     console.log('element', element)
//       map[element] = true;
//   });
//   // console.log('nums1', nums1)
//   nums2.forEach(element => { 
//       if (map[element] && !ans.includes(element)) {
//           ans.push(element);
//       }
//   });
//   return ans;
// }
var intersection = (nums1, nums2) => nums1.filter(item => nums2.includes(item))
let nums1 = [4,9,5] 
let nums2 = [9,4,9,8,4]
// console.log(intersection(nums1, nums2))
console.log(intersection(nums1, nums2))