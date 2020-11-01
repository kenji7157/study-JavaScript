module.exports = {
  // 実行モードの指定
  mode: 'development',
  // エントリーポイント
  entry: './src/index.js',
  // 出力先の指定
  output: {
    // 出力先のパス
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'main.js'
  },
  devServer: {
    contentBase: './dist'
  },
  // ローダーの有効化
  module: {
    rules: [
      // スタイル関連のローダー
      {
        // 適用するファイル
        test: /\.css$/,
        // 適用するローダー
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
