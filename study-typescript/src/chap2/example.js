// list 2-1-1
// function expo2(ammount) {
//   return ammount ** 2;
// }
// const value = expo2('1000');
// const withTax = value *1.1;
// console.log(withTax);

// list 2-1-3
function taxed(amount) {
  return amount * 1.1;
}
function fee(amount) {
  return `{amount * 1.4}`;
}
function price(amount) {
  return `${fee(amount)}`;
}
const demand = '¥' + taxed(price(1000));
console.log(demand);