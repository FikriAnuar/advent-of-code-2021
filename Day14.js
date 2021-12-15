//Part 1
var template = `CHBBKPHCPHPOKNSNCOVB`;

/*var input = `CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;
*/
var input = `SP -> K
BB -> H
BH -> S
BS -> H
PN -> P
OB -> S
ON -> C
HK -> K
BN -> V
OH -> F
OF -> C
SN -> N
PF -> H
CF -> F
HN -> S
SK -> F
SS -> C
HH -> C
SO -> B
FS -> P
CB -> V
NK -> F
KK -> P
VN -> H
KF -> K
PS -> B
HP -> B
NP -> P
OO -> B
FB -> V
PO -> B
CN -> O
HC -> B
NN -> V
FV -> F
BK -> K
VC -> K
KV -> V
VF -> V
FO -> O
FK -> B
HS -> C
OV -> F
PK -> F
VV -> S
NH -> K
SH -> H
VB -> H
NF -> P
OK -> B
FH -> F
CO -> V
BC -> K
PP -> S
OP -> V
VO -> C
NC -> F
PB -> F
KO -> O
BF -> C
VS -> K
KN -> P
BP -> F
KS -> V
SB -> H
CH -> N
HF -> O
CV -> P
NB -> V
FF -> H
OS -> S
CS -> S
KC -> F
NS -> N
NV -> O
SV -> V
BO -> V
BV -> V
CC -> F
CK -> H
KP -> C
KH -> H
KB -> F
PH -> P
VP -> P
OC -> F
FP -> N
HV -> P
HB -> H
PC -> N
VK -> H
HO -> V
CP -> F
SF -> N
FC -> P
NO -> K
VH -> S
FN -> F
PV -> O
SC -> N`;

var directions = input.split(`\n`).join(` -> `).split(` -> `);
//console.log(directions);
var fusion = {};
for (var i = 0; i < directions.length; i+=2) {
 fusion[directions[i]] = directions[i+1];
}
//console.log(fusion);
var doStep = (string) => {
  var newString = '';
  for (var i = 0; i < string.length - 1; i++) {
    newString += string[i];
    if (fusion[string[i]+string[i+1]]) {
      newString += fusion[string[i]+string[i+1]];
    }
  }
  newString+= string[string.length-1];
  return newString;
}

var result = template;
for (var i = 0; i < 10; i++) {
  result = doStep(result);
}
var letters = {};
for (var i = 0; i < result.length; i++) {
  letters[result[i]] = letters[result[i]] + 1 || 1;
}
console.log(letters);
//F and B
console.log(4156-1038);
/*
var pairs = {};
for (var i = 0; i < result.length-1;i++) {
  pairs[result[i]+result[i+1]] = pairs[result[i]+result[i+1]] + 1 || 1;
}*/
//console.log(pairs);
var pair = {};
for (var i = 0; i < template.length-1; i++) {
  pair[template[i]+template[i+1]] = pair[template[i]+template[i+1]] || 1;
}
//console.log(pair);
var doPairs = (pairs) => {
  var newPairs = {};
  for (var key in pairs) {
    var occurences = pairs[key];
    if (fusion[key]) {
      var newLetter = fusion[key];
      newPairs[key[0]+newLetter] = newPairs[key[0]+newLetter] + occurences || occurences;
      newPairs[newLetter+key[1]] = newPairs[newLetter+key[1]] + occurences || occurences;
    } else {
      newPairs[key] = newPairs[key] + occurences || occurences;
    }
  }
  //console.log(newPairs);
  return newPairs;
}
var curObj = pair;
for (var i = 0; i < 10; i++) {
  curObj = doPairs(curObj);
}
var totalLetters = {};
for (var key in curObj) {
  totalLetters[key[0]] = totalLetters[key[0]] + curObj[key] || curObj[key];
}
console.log(totalLetters);

//Part 2
var template = `CHBBKPHCPHPOKNSNCOVB`;
var exampleDirections = `SP -> K
BB -> H
BH -> S
BS -> H
PN -> P
OB -> S
ON -> C
HK -> K
BN -> V
OH -> F
OF -> C
SN -> N
PF -> H
CF -> F
HN -> S
SK -> F
SS -> C
HH -> C
SO -> B
FS -> P
CB -> V
NK -> F
KK -> P
VN -> H
KF -> K
PS -> B
HP -> B
NP -> P
OO -> B
FB -> V
PO -> B
CN -> O
HC -> B
NN -> V
FV -> F
BK -> K
VC -> K
KV -> V
VF -> V
FO -> O
FK -> B
HS -> C
OV -> F
PK -> F
VV -> S
NH -> K
SH -> H
VB -> H
NF -> P
OK -> B
FH -> F
CO -> V
BC -> K
PP -> S
OP -> V
VO -> C
NC -> F
PB -> F
KO -> O
BF -> C
VS -> K
KN -> P
BP -> F
KS -> V
SB -> H
CH -> N
HF -> O
CV -> P
NB -> V
FF -> H
OS -> S
CS -> S
KC -> F
NS -> N
NV -> O
SV -> V
BO -> V
BV -> V
CC -> F
CK -> H
KP -> C
KH -> H
KB -> F
PH -> P
VP -> P
OC -> F
FP -> N
HV -> P
HB -> H
PC -> N
VK -> H
HO -> V
CP -> F
SF -> N
FC -> P
NO -> K
VH -> S
FN -> F
PV -> O
SC -> N`;

exampleDirections = exampleDirections.split(`\n`).join(` -> `).split(` -> `);
var fusions = {};
for (var i = 0; i < exampleDirections.length; i+=2) {
  fusions[exampleDirections[i]] = exampleDirections[i+1];
}
var pairs = {};
for (var i = 0; i < template.length-1; i++) {
  pairs[template[i]+template[i+1]] = pairs[template[i]+template[i+1]] + 1 || 1;
}
var lastLetter = template[template.length-1]
var totalLetters = {};
totalLetters[lastLetter] = 1;
var doStep = (curPairs) => {
  var newPairs = {};
  for (var key in curPairs) {
    if (fusions[key]) {
      newPairs[key[0] + fusions[key]] = newPairs[key[0] + fusions[key]] + curPairs[key] || curPairs[key];
      newPairs[fusions[key] + key[1]] = newPairs[fusions[key] + key[1]] + curPairs[key] || curPairs[key];
    } else {
      newPairs[key] = newPairs[key] + 1 || 1;
    }
  }
  //console.log(newPairs);
  return newPairs;
}
for (var i = 0; i < 40; i++) {
  pairs = doStep(pairs);
}
for (var key in pairs) {
  totalLetters[key[0]] = totalLetters[key[0]] + pairs[key] || pairs[key];
  //console.log(key[0], pairs[key]);
}
console.log(pairs);
console.log(totalLetters);
console.log(totalLetters['F'] - totalLetters['B']);
