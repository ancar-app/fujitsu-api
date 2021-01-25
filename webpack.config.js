/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  mode: 'production',

  entry: './src/index.ts',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },

  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@apis': path.resolve(__dirname, 'src/apis'),
    },
  },
}
