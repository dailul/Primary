// 1
const shallowClone = (target) => {
    if (typeof target === 'object' && target !== null) {
      const cloneTarget = Array.isArray(target) ? []: {};
      for (let prop in target) {
        if (target.hasOwnProperty(prop)) {
            cloneTarget[prop] = target[prop];
        }
      }
      return cloneTarget;
    } else {
      return target;
    }
  }
  // 2
//   let arr = [1, 2, 3, 4]
//   let newArr = arr.slice();

//   // 3
// let arr = [1, 2, 3];
// let newArr = arr.concat();
// newArr[1] = 100;
// console.log(arr);//[ 1, 2, 3 ]

// // 4
// let arr = [1, 2, 3];
// let newArr = [...arr];//跟arr.slice()是一样的效果

// 5
let obj = { name: 'sy', age: 18 };
const obj2 = Object.assign({}, obj, {name: 'sss'});
obj.age = 225
console.log(obj2, obj);//{ name: 'sss', age: 18 }