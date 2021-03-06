const calculateScore = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('calculateScore args must be in an array')
  } else {
    return arr.map(item => item * 3).reduce((a, b) => a + b)
  }
}

export default calculateScore
