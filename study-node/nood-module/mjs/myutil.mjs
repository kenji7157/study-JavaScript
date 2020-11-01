// ES Modules 形式
let message = 'こんにちは、webpack！';

export const APP_NAME = 'webpack講座';

export function hello() {
    console.log(message);
}

export class Figure {
  static getTriangle(base, height) {
    return base * height / 2;
  }
}