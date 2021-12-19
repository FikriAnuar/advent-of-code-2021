var input = `target area: x=81..129, y=-150..-108`;

var startPos = [0, 0];
//var startVel = [6, 9];
var xBounds = [81, 129];
var yBounds = [-150, -108];
var prevPos = startPos;
//var prevVel = currentVel;

var doStep = ([xPos, yPos], [xVel, yVel]) => {
  var newPos = [xPos + xVel, yPos + yVel];
  var drag = 0;
  if (xVel > 0) {
    drag = -1;
  } else if (xVel < 0) {
    drag = 1;
  }
  var newVel = [xVel + drag, yVel - 1];
  return [newPos, newVel];
}


var checkTrickShot = (currentPos, currentVel) => {
  var peak = 0;
  while (currentPos[0] <= xBounds[1] && currentPos[1] >= yBounds[0]) {
    prevPos = currentPos;
    [currentPos, currentVel] = doStep(currentPos, currentVel);
    if (currentPos[1] > peak) {
      peak = currentPos[1];
    }
  }
  if (prevPos[0] >= xBounds[0] && prevPos[0] <= xBounds[1] && prevPos[1] >= yBounds[0] && prevPos[1] <= yBounds[1]) {
    return [true, peak];
  } else {
    return false;
  }
};

var maxHeight = 0;
var totalValues = 0;

for (var i = 0; i < 150; i++) {
  for (var j = -300; j < 300; j++) {
    if ((checkTrickShot([0,0], [i, j]))[0]) {
      var peak = (checkTrickShot([0,0], [i, j]))[1];
      if (peak > maxHeight) {
        maxHeight = peak;
      }
      totalValues++;
    }
  }
}

console.log(maxHeight);
console.log(totalValues);
