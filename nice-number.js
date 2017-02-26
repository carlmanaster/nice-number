const _nice = n => {
  const K = 1000
  const M = K * K
  const G = M * K
  if (n < 0.001) return n.toExponential(1)
  if (n < 1)     return n.toFixed(3)
  if (n < 10)    return n.toFixed(1)
  if (n < K)     return n.toFixed()
  if (n < M)     return (n / K).toFixed() + `K`
  if (n < G)     return (n / M).toFixed() + `M`
  if (n < G * K) return (n / G).toFixed() + `G`
  return n.toExponential(1)
}

const niceNumber = n => {
  if (n === null || n === undefined) return `null`
  if (n < 0) return `-` + _nice(-n)
  return _nice(n)
}

module.exports = {
  niceNumber
}
