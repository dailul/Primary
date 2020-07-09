'use strict'
// let obj = {
//   name: '镇安'
// }
// Object.defineProperty(obj, 'age', {
//   value: 15
// })
function Person (){
}
Person.prototype.name = '章三'
Person.prototype.sayName = function() {
  console.log(`sayName${this.name}`)
}
// const person = new Person()
// // console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// // console.log(Object.getOwnPropertyDescriptor(obj, 'age'))
// console.log(Object.getPrototypeOf(person) === Person.prototype)
// console.log(Person.prototype.isPrototypeOf(person))
// console.log(Object.getPrototypeOf(person))
// console.log(person.__proto__ === Person.prototype)
// console.log(Object.getOwnPropertyNames(Person.prototype))
// for (let key in Object.getOwnPropertyNames(Person.prototype)) {
//   // console.log(`${Person.prototype[Object.getOwnPropertyNames(Person.prototype)[key]]}`)
// }
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf({ toString: function() {
  console.log(222)
} }), 'toString'))
