var fs = require('fs');

//iteration one
// fs.readFile('files/start.txt', 'utf8', function (err, data) {
//   var sentence = " ";
//   var lines = data.split('\n');
//   // console.log(lines);
//   sentence += lines[0] + " ";

//   fs.readFile('files/next.txt', 'utf8', function(err, data){
//     var lines = data.split('\n');
//     sentence += lines[0] + " ";

//     fs.readFile('files/again.txt', 'utf8', function(err, data){
//       var lines = data.split('\n');
//       sentence += lines[0] + " ";
//       console.log(sentence);

//     });
//   });
// });

//iteration two
fs.readFile('files/start.txt', 'utf8', function (err, data) {
  var sentence = " ";
  var lines = data.split('\n');
  sentence += lines[0] + " ";
  var next = lines[1];

  fs.readFile(next, 'utf8', function(err, data){
    sentence += lines[0] + " ";

    fs.readFile(next, 'utf8', function(err, data){
      sentence += lines[0] + " ";
      console.log(sentence);

    });
  });
});







