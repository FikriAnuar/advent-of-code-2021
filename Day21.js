var input = `Player 1 starting position: 6
Player 2 starting position: 7`;

var currentDice = 0;
var calcDiceRoll = (diceValue) => {
  var num = diceValue % 100;
  return num + 1;
}
var player1Points = 0;
var player2Points = 0;

var player1Turn = true;

var player1Position = 6;
var player2Position = 7;

var doPlayerTurn = (isPlayer1) => {
  if (isPlayer1) {
    player1Position += calcDiceRoll(currentDice) + calcDiceRoll(currentDice + 1) + calcDiceRoll(currentDice +2);
    player1Position = calcPosition(player1Position);
    player1Points += player1Position;
  } else {
    player2Position += calcDiceRoll(currentDice) + calcDiceRoll(currentDice + 1) + calcDiceRoll(currentDice +2);
    player2Position = calcPosition(player2Position);
    player2Points += player2Position;
  }
  currentDice += 3;
  player1Turn = !player1Turn;
}

var calcPosition = (number) => {
  var num = number % 10;
  if (num === 0) {
    return 10;
  } else {
    return num;
  }
}

while (player1Points < 1000 && player2Points < 1000) {
  doPlayerTurn(player1Turn);
  //console.log(player1Points, player2Points);
}

console.log(currentDice);
console.log(player1Points, player2Points);
console.log(1005*917);

//27 possibilities
//3: 1
//4: 3
//5: 6
//6: 7
//7: 6
//8: 3
//9: 1

var winScore = 21;
var player1Wins = 0;
var player2Wins = 0;

var calcOutcomes = (pos1, pos2, score1, score2, player1Turn, possibilities) => {
  if (player1Turn) {
    if (calcPosition(pos1+3) + score1 >= winScore) {
      player1Wins += possibilities;
    } else {
      calcOutcomes(calcPosition(pos1+3), pos2, score1 + calcPosition(pos1+3), score2, !player1Turn, possibilities);
    }
    if (calcPosition(pos1+4) + score1 >= winScore) {
      player1Wins += 3*possibilities;
    } else {
      calcOutcomes(calcPosition(pos1+4), pos2, score1 + calcPosition(pos1+4), score2, !player1Turn, possibilities*3);
    }
    if (calcPosition(pos1+5) + score1 >= winScore) {
      player1Wins += 6*possibilities;
    } else {
      calcOutcomes(calcPosition(pos1+5), pos2, score1 + calcPosition(pos1+5), score2, !player1Turn, possibilities*6);
    }
    if (calcPosition(pos1+6) + score1 >= winScore) {
      player1Wins += 7*possibilities;
    } else {
      calcOutcomes(calcPosition(pos1+6), pos2, score1 + calcPosition(pos1+6), score2, !player1Turn, possibilities*7);
    }
    if (calcPosition(pos1+7) + score1 >= winScore) {
      player1Wins += 6*possibilities;
    } else {
      calcOutcomes(calcPosition(pos1+7), pos2, score1 + calcPosition(pos1+7), score2, !player1Turn, possibilities*6);
    }
    if (calcPosition(pos1+8) + score1 >= winScore) {
       player1Wins += 3*possibilities;
    } else {
      calcOutcomes(calcPosition(pos1+8), pos2, score1 + calcPosition(pos1+8), score2, !player1Turn, possibilities*3);
    }
    if (calcPosition(pos1+9) + score1 >= winScore) {
      player1Wins += possibilities;
    } else {
      calcOutcomes(calcPosition(pos1+9), pos2, score1 + calcPosition(pos1+9), score2, !player1Turn, possibilities);
    }
  } else {
    if (calcPosition(pos2+3) + score2 >= winScore) {
      player2Wins += possibilities;
    } else {
      calcOutcomes(pos1, calcPosition(pos2+3), score1, score2 + calcPosition(pos2+3), !player1Turn, possibilities);
    }
    if (calcPosition(pos2+4) + score2 >= winScore) {
      player2Wins += 3*possibilities;
    } else {
      calcOutcomes(pos1, calcPosition(pos2+4), score1, score2 + calcPosition(pos2+4), !player1Turn, possibilities*3);
    }
    if (calcPosition(pos2+5) + score2 >= winScore) {
      player2Wins += 6*possibilities;
    } else {
      calcOutcomes(pos1, calcPosition(pos2+5), score1, score2 + calcPosition(pos2+5), !player1Turn, possibilities*6);
    }
    if (calcPosition(pos2+6) + score2 >= winScore) {
      player2Wins += 7*possibilities;
    } else {
      calcOutcomes(pos1, calcPosition(pos2+6), score1, score2 + calcPosition(pos2+6), !player1Turn, possibilities*7);
    }
    if (calcPosition(pos2+7) + score2 >= winScore) {
      player2Wins += 6*possibilities;
    } else {
      calcOutcomes(pos1, calcPosition(pos2+7), score1, score2 + calcPosition(pos2+7), !player1Turn, possibilities*6);
    }
    if (calcPosition(pos2+8) + score2 >= winScore) {
      player2Wins += 3*possibilities;
    } else {
      calcOutcomes(pos1, calcPosition(pos2+8), score1, score2 + calcPosition(pos2+8), !player1Turn, possibilities*3);
    }
    if (calcPosition(pos2+9) + score2 >= winScore) {
      player2Wins += possibilities;
    } else {
      calcOutcomes(pos1, calcPosition(pos2+9), score1, score2 + calcPosition(pos2+9), !player1Turn, possibilities);
    }
  }
}

calcOutcomes(6, 7, 0, 0, true, 1);
console.log(player1Wins, player2Wins);
