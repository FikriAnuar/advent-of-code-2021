var input = `4134384626
7114585257
1582536488
4865715538
5733423513
8532144181
1288614583
2248711141
6415871681
7881531438`;

/*var input = `11111
19991
19191
19991
11111`;*/

var simulFlash = false;
var steps = 0;
var numOfFlashes = 0;
var nums = input.split(`\n`);
grids = [];
for (var i = 0; i < nums.length; i++) {
  grids.push([]);
  for (var j = 0; j < nums[i].length; j++) {
    grids[i].push(parseInt(nums[i][j]));
  }
}
var step = 0;
var doStep = (grid) => {
  var curNumFlashes = 0;
  var totalOctNum = 0;
  var hasFlashed = [];
  for (var i = 0; i < grid.length; i++) {
    hasFlashed.push([]);
    for (var j = 0; j < grid[i].length; j++) {
      totalOctNum++;
      grid[i][j]++;
      hasFlashed[i][j] = false;
    }
  }
  var noFlashes = false;
  while (!noFlashes) {
    noFlashes = true;
    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[i].length; j++) {
        if (grid[i][j] > 9 && !hasFlashed[i][j]) {
          noFlashes = false;
          hasFlashed[i][j] = true;
          if (i !== 0) {
            grid[i-1][j]++;
          }
          if (i !== 0 && j !== 0) {
            grid[i-1][j-1]++;
          }
          if (j !== 0) {
            grid[i][j-1]++;
          }
          if (i !== grid.length-1) {
            grid[i+1][j]++;
          }
          if (i !== grid.length-1 && j !== grid.length-1) {
            grid[i+1][j+1]++;
          }
          if (j !== grid.length-1) {
            grid[i][j+1]++;
          }
          if (i !== 0 && j !== grid.length-1) {
            grid[i-1][j+1]++;
          }
          if (i !== grid.length-1 && j !== 0) {
            grid[i+1][j-1]++;
          }
        }
      }
    }
  }
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (hasFlashed[i][j]) {
        grid[i][j] = 0;
        numOfFlashes++;
        curNumFlashes++;
      }
    }
  }
  if (curNumFlashes === totalOctNum) {
    simulFlash = true;
  }
  steps++;
  return grid;
}

for (var i = 0; i < 100; i++) {
  doStep(grids);
}
console.log(`part1: `, numOfFlashes);

while (!simulFlash) {
  doStep(grids);
}
console.log(`part2: `, steps);
