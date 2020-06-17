function getData(data) {
  return new Promise((resolve, reject) => {
    if (data === 1) {
      setTimeout(() => {
        resolve('getdata success')
      }, 1000)
    } else {
      setTimeout(() => {
        reject('getdata error')
      }, 1000)
    }
  })
}
// const test = async () => {
//   try {
//     const res = await getData(2)
//     console.log('res', res)
//   } catch(error) {
//     console.log('error', error)
//   }
// }

// const test = async () => {
//   const res = await getData(2).then(res => res).catch(error => error)
//   console.log('res', res)
// }
function requestWrap(promise) {
  return promise.then(res => [res, null]).catch(error => [null, error])
}
const test = async () => {
  const res = await requestWrap(getData(2))
  console.log('res', res)
}
test()