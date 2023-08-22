/**
 * 174. Dungeon Game
 * Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
 *
 * Output: 7
 * Explanation: The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-> RIGHT -> DOWN -> DOWN.
 *
 *
 */
const dungeon = [
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
];

// console.log(dungeon.length, "inside:", dungeon[0].length);

const calMiniHP = (dungeon) => {
  var nrows = dungeon.length;
  var ncols = dungeon[0].length;

  var dp = [];
  for (var r = 0; r < nrows + 1; r++) {
    dp[r] = [];
    for (var c = 0; c < ncols + 1; c++) {
      dp[r][c] = Number.MAX_SAFE_INTEGER;
    }
  }
  dp[nrows - 1][ncols] = dp[nrows][ncols - 1] = 1;

  for (var r = nrows - 1; r >= 0; r--) {
    for (var c = ncols - 1; c >= 0; c--) {
      console.log(dp);
      dp[r][c] = Math.max(
        1,
        Math.min(dp[r + 1][c], dp[r][c + 1]) - dungeon[r][c]
      );
    }
  }
  console.log(dp);
  return dp[0][0];
};
console.log(calMiniHP(dungeon));
