const path = require('path');

module.exports = {
  entry: {
    bundle: ['./src/index.ts']
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'public', 'assets'),
    ],
    host: 'localhost',
    port: 3000,
    hot: true,
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
};