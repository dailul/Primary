var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

// 执行完后，闭包是否会被垃圾回收
console.log('1', checkscope()())    // Yes

var foo = checkscope(); 
console.log('2', foo()) 
console.log('3', foo())   // No
