// 节流
function throttle(fn, interval) {
    let flag = true;
    return !function(...args) {
      let context = this
      if (!flag) return
      flag = false
      setTimeout(() => {
        fn.apply(context, args)
        flag = true
      }, interval)
    }()
  }

  const throttle2 = function(fn, interval) {
    let last = 0;
    return !function (...args) {
      let context = this;
      let now = +new Date();
      // 还没到时间
      if(now - last < interval) return;
      last = now;
      fn.apply(this, args)
    }()
  }
// 防抖
function debounce(fn, delay) {
  let timer = null
  return !function(...args) {
    let content = this
    timer && clearTimeout(timer)
    timer = setTimeout((args) => {
      fn.apply(content, args)
    }, delay)
  }
}