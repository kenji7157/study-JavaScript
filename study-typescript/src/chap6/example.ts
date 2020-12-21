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