const wrappedFetch = (...args) => {
  return fetch(...args)
    .then(res => res.json())
}

export default wrappedFetch
