## jestのインストール
```
npm install --save-dev jest
```

## 設定ファイル(jest.config.js)の生成
```
-> % ./node_modules/.bin/jest --init

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls and instances between every test? … no

📝  Configuration file created at /Users/kawanohenkenji/work/study/study-JavaScript/study-jest/jest.config.js
```

jest.config.jsファイルが生成される。
- テスト対象ファイルの指定などができる
- tsやES仕様などに合わせてコンパイルの設定も行える

## テスト実行時のオプション
- --silent  
ログ出力せずに実行
- --coverage  
テストのカバレッジについて自動で調査し、結果を出力

## カバレッジ
> カバレッジとは... コード網羅率  

全体の内にどのくらいテストを網羅できているか確認できる

```
カバレッジ表の例
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |   66.67 |      100 |      50 |   66.67 |                   
 cal.js   |   66.67 |      100 |      50 |   66.67 | 6                 
----------|---------|----------|---------|---------|-------------------
```

### 各指標について
- Stmtsは、ステートメントテスト(C0)を表す指標
- Branchは、デシジョン/ブランチテスト(C1)を表す指標
- Funcsは、定義関数を呼び出してるかどうかの指標
- Linesは、Stmtsで代替でき、後方互換性のための残った指標

### coverageレポートの確認
--coverageオプションをつけて実行したあとに、`coverage/lcov-report`内のindexh.htmlを参照しブラウザでレポートを確認できる。
各指標の算出式を把握することができる