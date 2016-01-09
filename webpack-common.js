import {join} from 'path'

export default {
  entry: [
    './src/index.jsx'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel'
        ]
      }
    ]
  },
  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  }
}
