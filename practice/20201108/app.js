// クラス定義
class Member {
  constructor() {}

  // getter/setter定義はプロパティ定義の扱い インスタンスから呼び出すことはできない
  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    // プロパティの定義
    this._firstName = firstName;
  }

  // インスタンスメソッドの定義
  getFirstName(firstName) {
    // getterの呼び出し
    return this.firstName;
  }

  setFirstName(firstName) {
    // setterの呼び出し
    this.firstName = firstName;
  }
}

let m = new Member();

console.log('log1', m.firstName);

m.setFirstName('Kawanoebe');

console.log('log2', m.firstName);