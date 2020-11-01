var http = require('http');
// ① fsオブジェクトを生成
var fs = require('fs');

var server = http.createServer(function(req, res) {
  // ② fs.readFile関数を呼び出す
  fs.readFile('./index.html', 'utf-8', function(err, data){
    // ③ text/htmlファイルが出力されることを宣言 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

server.listen(3000);
