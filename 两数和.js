let nums = [2, 7, 11, 15]
let target = 26
 function getSumIndex(numsArr, target) {
   let map = new Map()
   for (let i = 0; i < numsArr.length; i++) {
     for (let j = i + 1; j <numsArr.length; j++) {
       if (target - numsArr[i] === numsArr[j]) {
         map[i] = j
       }
     }
   }
   console.log('map', map)
   return map
 }
 getSumIndex(nums, target)
