// CommonJS形成
const cal = require('./cal');

// jest --silentでログは出力されなくなる
console.log('テストの実行');

test('case1', () => {
  expect(cal.hoge(true, false, true, false)).toEqual(['A', 'B']);
});

test('case2', () => {
  expect(cal.hoge(true, false, false, false)).toEqual(['A', '~B']);
});

test('case3', () => {
  expect(cal.hoge(true, false, false, false)).toEqual(['A', '~B']);
})

test('case4', () => {
  expect(cal.hoge(false, false, true, false)).toEqual(['B']);
})