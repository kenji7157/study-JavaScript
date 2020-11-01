// ① httpオブジェクトを生成
var http = require('http');

// ② http.Serverオブジェクトを生成
var server = http.createServer(function(req, res) {
  // ③ サーバにリクエストが合った場合に実行される処理
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();
});

// ④ ポート番号を指定してサーバを待ち受け状態とする
server.listen(3000);
