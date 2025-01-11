function getSolutionMatrix(maze) {
  const n = maze.length;
  const solution = [];

  for (let i = 0; i < n; i++) {
    solution[i] = [];

    for (let j = 0; j < n; j++) {
      solution[i][j] = 0;
    }
  }

  return solution;
}

function isSafe(maze, x, y) {
  const n = maze.length;

  if (x >= 0 && x < n && y >= 0 && y < n && maze[x][y] !== 0) {
    return true;
  }

  return false;
}

function findPath(maze, x, y, solution, sum) {
  const n = maze.length;

  if (x === n - 1 && y === n - 1) {
    solution[x][y] = 1;
    sum[0]++;
    return true;
  }

  if (!isSafe(maze, x, y)) {
    return false;
  }

  solution[x][y] = 1;

  if (findPath(maze, x + 1, y, solution, sum)) {
    return true;
  }

  if (findPath(maze, x, y + 1, solution, sum)) {
    return true;
  }

  solution[x][y] = 0;
  return false;
}

function ratInAMaze(maze) {
  const solution = getSolutionMatrix(maze);
  let sum = [0];

  if (findPath(maze, 0, 0, solution, sum)) {
    return { solution, sum };
  }

  return null;
}

console.log(
  ratInAMaze([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 1, 1, 1],
  ])
);
