// CommonJS 形式
// require... myutil.jsで出力されたモジュールをインポートする
var myutil = require('./myutil');

// 同じ変数名を使うことが可能
const name = '川野邉 賢二';

console.log('myutil.company', myutil.company);
console.log('myutil.name', myutil.name);
console.log('log name', name);

// myutil.jsで定義しているモジュールからnameだけをインポートすることも可能
// const {name} = require('./myutil');