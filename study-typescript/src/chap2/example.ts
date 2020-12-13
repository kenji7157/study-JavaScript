// list 2-1-2
// function expo2(amount: number) {
//   return amount ** 2;
// }

// const value = expo2('1000');

// list 2-1-4
// function taxed(amount: number): number {
//   return amount * 1.1;
// }
// function fee(amount: number): number {
//   return amount * 1.4;
// }
// function price(amount: number): number {
//   return fee(amount);
// }
// const demand = '¥' + taxed(price(1000));
// console.log(demand);

// list 2-2-6 tuple
// let x: [string, number];
// x = [10 , "hello"]

// list 2-3-1
// type Dog = {
//   name: string,
//   age: number
// };
// 
// const dog: Dog = {name: 'poti', age:10}

// list 2-4-3
type myObject = {
  foo: 'Foo',
  bar: 'Bar'
}
let temp: keyof myObject;
temp = 'bar';
console.log(temp)