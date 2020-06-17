const fullJustify = function(words, maxWidth) {
  let str = [];               //最终返回数组
  let strArr = [];            //每一行数组项数组
  let diff = maxWidth;        //当前行数剩余字符数量
  let total = 0;              //每一行各项数组字符长度之和
  for (let item of words) {
      const len = item.length;    //当前数组项字符长度
      if (len <= diff) {      //如果当前字符数量小于diff，则存入strArr，并更新diff
          total += len;
          strArr.push(item);
          diff -= len + 1;
      } else {
          diff = maxWidth - total;    //需要添加的空格数量
          if (strArr.length <= 1) {   //处理只有一项的特殊情况
              strArr[0] += ' '.repeat(diff);
          } else {
              while (diff > 0) {  //为每一行的数组前strArr.length - 1项添加空格
                  for (let i = 0; i < strArr.length; i++) {
                      if (diff > 0 && i < strArr.length - 1) {
                          strArr[i] = strArr[i] + ' ';
                          diff -= 1;
                      }
                  }
              }
          }
          str.push(strArr.reduce((a, b) => a + b));
          strArr = [item];
          total = len;
          diff = maxWidth - len - 1;
      }
  }
  // 处理最后一行
  diff = maxWidth - total - strArr.length + 1;
  str.push(strArr.join(' ') + ' '.repeat(diff));
  return str;
};
