
console.log('hello tsss')


// 高さが配列で入っている
// 高さの差分を絶対値で出せるようにする
// {aの高さ, cの高さの差分}と {bの高さ, cの高さの差分}を比較して値が小さい方をノードの値にする


const h = [2,9,4,5,1,6,10]
const dp: number[] = []

for (let i = 0; i < h.length; i++) {
  dp[i] = Infinity
}

// nodeの値を更新する
const chmin = (a: number, b: number): boolean => {
  if (a > b) {
    return true
  }
  return false
}

dp[0] = 0 // 初期値は0になる
for (let i = 1; i < h.length; i++) {
  // i番目のノードの値を出す
  // 1つ前の地点の高さの差を出す
  if (i - 1 >= 0) {
    const val = dp[i - 1] + Math.abs(h[i] - h[i - 1])
    if (chmin(dp[i], val)) {
      dp[i] = val
    }
  }
  // 2つ前の地点の高さの差を出してスコアを出す
  if (i == 1) continue
  const val = dp[i - 2] + Math.abs(h[i] - h[i - 2])
  if (chmin(dp[i], val)) {
    dp[i] = val
  }
}

console.log('dp', {
  h,
  dp,
  answer: dp[dp.length - 1]
})
