var myutil = require('./myutil');

console.log(myutil.APP_NAME);
myutil.hello();
console.log(myutil.Figure.getTriangle(10, 5));

// スタイルの適用
require('./style.css');

let body = document.getElementsByTagName('body')[0];
body.classList.add('sky');