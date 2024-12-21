function minCoinChange(coins, amount) {
  const cache = [];

  function makeChange(val) {
    if (!val) return [];

    if (cache[val]) return cache[val];

    let min = [];
    let newMin;
    let newAmount;

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = val - coin;

      if (newAmount >= 0) newMin = makeChange(newAmount);

      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin, ...newMin];
      }
    }

    return (cache[val] = min);
  }

  return makeChange(amount);
}

const val = minCoinChange([1, 5, 10, 25], 97);

console.log("val:", val);
