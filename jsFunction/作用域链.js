function bar () {
	var a = 1;
	function foo () {
		console.log(a)

	}
	console.dir(foo)
}
console.dir(bar)
bar()

// // 执行完后，闭包是否会被垃圾回收
// console.log('1', checkscope()())    // Yes

// var foo = checkscope(); 
// console.log('2', foo()) 
// console.log('3', foo())   // No
