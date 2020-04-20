var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    let x = stones.shift();
    let y = stones.shift();

    if (x === y) {
      lastStoneWeight(stones);
    } else if (x > y) {
      stones.push(x - y);
      lastStoneWeight(stones);
    }
  }

  if (stones.length === 0) return 0;
  if (stones.length === 1) {
    let lastWeight = stones[0];
    return lastWeight;
  }
};

let last = lastStoneWeight([2, 0]);
console.log(last);
