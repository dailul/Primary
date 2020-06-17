const user = {
  name: '张三',
  sex: 1,
  age: 17,
  toJSON() {
    return `${this.name}----${this.age}`
  }
}
// JSON.stringify(user, null, '****')
// JSON.stringify(user, ['name'])
// JSON.stringify(user, (key, value) => {
//   if (typeof value === 'string') {
//     return undefined
//   } else {
//     return value
//   }
// })
console.log(JSON.stringify(user, null, '****'))