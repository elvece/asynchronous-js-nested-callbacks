var fs = require('fs');

fs.readFile('files/start.txt', 'utf8', function (err, data) {
  var sentence = " ";
  var lines = data.split('\n');
  // console.log(lines);

  sentence += lines[0] + " ";

  fs.readFile('files/next.txt', 'utf8', function(err, data){
    var lines = data.split('\n');
    sentence += lines[0] + " ";

    fs.readFile('files/again.txt', 'utf8', function(err, data){
      var lines = data.split('\n');
      sentence += lines[0] + " ";
      console.log(sentence);

    });
  });
});
