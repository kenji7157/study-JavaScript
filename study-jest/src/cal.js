function hoge(a1, a2, b1, b2) {
  let result = [];
  if(a1 || a2){ // 判定条件A
    result.push('A'); // 命令1
  }
  if(b1 || b2){ // 判定条件B
    result.push('B'); // 命令2
  } else {
    result.push('~B'); // 命令3
  }
  return result;
};
module.exports = {
  hoge,
};