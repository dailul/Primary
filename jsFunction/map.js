Array.prototype.map = function(callbackFn, thisArg) {
    console.log('this', Object.prototype.toString.call(callbackFn))
    // 处理数组类型异常
    if (this === null || this === undefined) {
      throw new TypeError("Cannot read property 'map' of null or undefined");
    }
    // 处理回调类型异常
    if (Object.prototype.toString.call(callbackFn) != "[object Function]") {
      throw new TypeError(callbackFn + ' is not a function')
    }
    // 草案中提到要先转换为对象
    let O = Object(this);
    let T = thisArg;
  
    
    let len = O.length >>> 0; //  length >>> 0, 字面意思是指"右移 0 位"，但实际上是把前面的空位用0填充，这里的作用是保证len为数字且为整数。
    let A = new Array(len);
    console.log('A', A, len)
    for(let k = 0; k < len; k++) {
      // 还记得原型链那一节提到的 in 吗？in 表示在原型链查找
      // 如果用 hasOwnProperty 是有问题的，它只能找私有属性
      if (k in O) {
        console.log('k oa', k, O)
        // 依次传入this, 当前项，当前索引，整个数组
        A[k] = callbackFn.call(T, O[k], k, O);
      }
    }
    return A;
  }

  // 测试
  let arr = [1, 2, 3, 4, 5]
  arr.map((item) => {
    return item * 2
})