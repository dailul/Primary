this.$nextTick(() => {
  let insertList = []
  let observe = new MutationObserver(function(mutations, observers) {
    mutations.forEach(function(mutation) {
      insertList.push(mutation)
    })
  })
  observe.observe(document.documentElement, { childList: true })
  setTimeout(() => {
    console.log('mutation', insertList)
  })
})