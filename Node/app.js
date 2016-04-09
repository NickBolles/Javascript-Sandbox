var fs = require('fs');

var arr = [];

for (var i=0;i<200;i++){
  var node = {
    name: i,
    orientation: Math.random()*360,
    connections: []
  };
  for(var k=0;k<12;k++){
    node.connections.push({
      id: k,
      connected: {
        id: Math.random()*200,
        connection: Math.random()*12
      }
    })
  }
  arr.push(node);
}



fs.writeFileSync('LEDJson.json', JSON.stringify(arr));