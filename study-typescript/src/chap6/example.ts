type TypeA = {
  name: string,
  age: number,
}

let num: keyof TypeA = "name";

console.log(num);

function pick<T, K extends keyof T>(props: T, key: K) {
  return props[key];
}

const obj = {
  name: 'Taro'
}

const value = pick(obj,'name');

// pracitce 
// type Hoge1 = {
//   name: string,
//   age: never,
// }
// const n1: Hoge1[keyof Hoge1] = 

// list 6-2-2
type Properties = {
  name: string,
  age: number,
  walk: () => void,
  jump: () => Promise<void>
}

type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T]

type StringLeys = Filter<Properties, string>

// list 6-2-11
interface DeepNest {
  deep: { nest: {value: string } }
}
interface ShallowNest {
  shallow: { value: string}
}
interface Pro {
  deep: DeepNest,
  shallow: ShallowNest
}

type Salvage<T extends DeepNest> = T['deep']['nest']['value'];
type DeepDiv<T> = {
  [K in keyof T]: T[K] extends DeepNest ? Salvage<T[K]>: never
}[keyof T];
type x = DeepDiv<Pro>;

// list 6-2-12
function greet() {
  return 'Hello!'
}

type Return<T> = T extends (...arg: any[]) => infer U ? U : never;
type R = Return<typeof greet>