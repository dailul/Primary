// try {
//     setTimeout(()=>{
//         console.log(a.b);  
//    }, 100)
// }catch(error) {
//     console.log('error', error)
// }
// let profile = {name:"April",nickname:"二十七刻",country:"China"};
// let profile = ['a','b','c'];
// for(let i in profile){
//     let item = profile[i];
//     console.log('item', item) 
//     if (item === 'b') continue  // 对象的键值
//     console.log('i', i)  
// }
// for(let item of profile){
//     console.log(item)     
// }
function debounce(func, wait) {
    let timeout = null
    return function() {
        let context = this
        let args = arguments
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}

function fn() {
    console.log(1)
}
let result = debounce(fn, 1000)()
console.log('result', fn)