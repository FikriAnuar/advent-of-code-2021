var input = `BC-gt
gt-zf
end-KH
end-BC
so-NL
so-ly
start-BC
NL-zf
end-LK
LK-so
ly-KH
NL-bt
gt-NL
start-zf
so-zf
ly-BC
BC-zf
zf-ly
ly-NL
ly-LK
IA-bt
bt-so
ui-KH
gt-start
KH-so`;
/*
var input = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;
*/
var paths = input.split(`\n`);
var splits = paths.join('-').split('-');
var vertices = {end: []};
for (var i = 0; i < splits.length; i+=2) {
  if (splits[i+1] !== 'start' && splits[i] !== 'end' && !vertices[splits[i]]) {
    vertices[splits[i]] = [splits[i+1]];
  } else {
   if (splits[i] !== 'end' && splits[i+1] !== 'start' && vertices[splits[i]].indexOf(splits[i+1]) === -1) {
      vertices[splits[i]].push(splits[i+1]);
    }
  }
  if (splits[i] !== 'start' && splits[i+1] !== 'end' && !vertices[splits[i+1]]) {
    vertices[splits[i+1]] = [splits[i]];
  } else {
    if (splits[i+1] !== 'end' && splits[i] !== 'start' && vertices[splits[i+1]].indexOf(splits[i]) === -1) {
      vertices[splits[i+1]].push(splits[i]);
    }
  }
}
//console.log(vertices);
var curVertex = `start`;
var paths = 0;
var traversed = [];
var path = [];
var singleSmallUsed = false;
var move = (vertex) => {
  //console.log(traversed);
  /*if (vertex === 'start') {
    traversed.push('start');
  }*/
  if (vertex === 'end') {
    path.push('end');
    //console.log(path);
    path.pop();
    paths++;
  } else {
  for (var i = 0; i < vertices[vertex].length; i++) {
    path.push(vertex);
    if (vertex[0] !== vertex[0].toUpperCase()) {
      traversed.push(vertex);
    }
    if (traversed.indexOf(vertices[vertex][i]) === -1) {
      //console.log(vertices[vertex][i]);
      move(vertices[vertex][i]);
    } else if (!singleSmallUsed) {
      singleSmallUsed = true;
      move(vertices[vertex][i]);
      singleSmallUsed = false;
    }
    if (vertex[0] !== vertex[0].toUpperCase()) {
      traversed.pop();
    }
    path.pop(vertex);
  }  
  }
}
move(curVertex);
console.log(paths);
//console.log(vertices);
