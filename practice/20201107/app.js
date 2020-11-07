// 静的メソッドでthisを参照した場合の挙動確認
var Member = function(name) {
  this.name = name;
  this.test = 'aa'
};

Member.getName = function() {
  console.log('this:', this);
  return this.test;
}

var m = new Member('Kenji');

console.log(Member.getName());

