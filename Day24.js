var input = `inp w
mul x 0
add x z
mod x 26
div z 1
add x 12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 4
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 11
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 10
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 14
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 12
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -6
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 14
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 15
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 6
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 16
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -9
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 1
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 14
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 7
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 14
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 8
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -5
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 11
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -9
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 8
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -5
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 3
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -2
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 1
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -7
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 8
mul y x
add z y`;

var instructions = input.split(`\n`);

var variables = {
w: 0,
x: 0,
y: 0,
z: 0
};

for (var i = 0; i < instructions.length; i++) {
  instructions[i] = instructions[i].split(' ');
}

var curNum = [];
for (var i = 0; i < 14; i++) {
  curNum.push(4);
}

var decrementNum = (numArray) => {
  var num = parseInt(numArray.join(''));
  var hasZero = true;
  while (hasZero) {
    num--;
    if (!num.toString().includes('0')) {
      hasZero = false;
    } 
  }
  return num.toString().split('');
}

var isLetter = (input) => {
  if (input === 'w' || input === 'x' || input === 'y' || input === 'z') {
    return true;
  }
  return false;
}


var resetVars = () => {
  variables['w'] = 0;
  variables['x'] = 0;
  variables['y'] = 0;
  variables['z'] = 0;
}

var checkValid = (model) => {
  resetVars();
  var curDigit = 0;
  for (var i = 0; i < instructions.length; i++) {
    var instr = instructions[i][0];
    if (instr === 'inp') {
      var letter = instructions[i][1];
      variables[letter] = parseInt(model[curDigit]);
      /*
      if (curDigit === 13) {
        console.log(variables);
      }*/
      curDigit++;
    } else if (instr === 'add') {
      var first = instructions[i][1];
      var second = instructions[i][2];
      if (isLetter(second)) {
        variables[first] = variables[first] + variables[second];
      } else {
        variables[first] = variables[first] + parseInt(second);
      }
    } else if (instr === 'mul') {
      var first = instructions[i][1];
      var second = instructions[i][2];
      if (isLetter(second)) {
        variables[first] = variables[first] * variables[second];
      } else {
        variables[first] = variables[first] * parseInt(second);
      }
    } else if (instr === 'div') {
      var first = instructions[i][1];
      var second = instructions[i][2];
      if (isLetter(second)) {
        variables[first] = Math.trunc(variables[first]/variables[second]);
      } else {
        variables[first] = Math.trunc(variables[first]/parseInt(second));
      }
    } else if (instr === 'mod') {
      var first = instructions[i][1];
      var second = instructions[i][2];
      variables[first] = variables[first] % parseInt(second);
    } else if (instr === 'eql') {
      var first = instructions[i][1];
      var second = instructions[i][2];
      if (isLetter(second)) {
        variables[first] = (variables[first] === variables[second]) ? 1 : 0;
      } else {
        variables[first] = (variables[first] === parseInt(second)) ? 1 : 0;
      }
    }
  }
  console.log(variables);
  return variables['z'] === 0;
}

//console.log(checkValid(curNum));
/*
while (!checkValid(curNum)) {
  curNum = decrementNum(curNum);
}*/
var curNum = [9,1,3,9,8,2,9,9,6,9,7,9,9,6]
for (var i = 1; i < 10; i++) {
  curNum[0] = i;
  var num = curNum;
  if (checkValid(curNum)) {
    console.log(curNum);
  }
}
console.log(':(')

console.log(checkValid([4,1,1,7,1,1,8,3,1,4,1,2,9,1]));
//num[2]+6 = num[3];
//num[5]+7 = num[6];
//num[8]+3 = num[9];
//num[10]+2 = num[7];
//num[4]+1 = num[11];
//num[1]+8 = num[12];
//num[13]+3 = num[0];

// 1, num[0] + 4, num[0] + 4;
// 1, 10+num[1], 26*(num[0]+4)+10+num[1]
// 1, num[2]+12, 26*(26*(num[0]+4)+10+num[1])+num[2]+12
// !(num[3] = num[2]+6), 25, 26*(num[0]+4)+10+num[1]

//0, 0, 26*(num[0]+4)+10+num[1]
//1, num[4]+6, 26*(26*(num[0]+4)+10+num[1])+num[4]+6
//1, num[5]+16, 26*(26*(26*(num[0]+4)+10+num[1])+num[4]+6)+num[5]+16
//0, 0, 26*(26*(num[0]+4)+10+num[1])+num[4]+6
//1, num[7]+7, 26*(26*(26*(num[0]+4)+10+num[1])+num[4]+6)+num[7]+7
//1, num[8]+8, 26*(26*(26*(26*(num[0]+4)+10+num[1])+num[4]+6)+num[7]+7)+num[8]+8
//0, 0, 26*(26*(26*(num[0]+4)+10+num[1])+num[4]+6)+num[7]+7
//0, 0, 26*(26*(num[0]+4)+10+num[1])+num[4]+6
//0, 0, 26*(num[0]+4)+10+num[1]
//0, 0, num[0]+4
//0, 0, 0
