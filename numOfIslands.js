var numIslands = function (grid) {
  let count = 0;

  // Wrong. Have to Graph
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let landCount = 0;

      if (grid[i][j] === "1") {
        landCount =
          grid[i][j - 1] && grid[i][j - 1] === "1" ? landCount + 1 : landCount;
        landCount =
          grid[i][j + 1] && grid[i][j + 1] === "1" ? landCount + 1 : landCount;
        landCount =
          grid[i - 1] && grid[i - 1][j] === "1" ? landCount + 1 : landCount;
        landCount =
          grid[i + 1] && grid[i + 1][j] === "1" ? landCount + 1 : landCount;

        if (landCount === 0 || landCount === 1) {
          count++;
        }
      }
    }
  }

  console.log(count);

  return count;
};

// numIslands([
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ]);

numIslands([["1", "1"]]);
