import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import webpack from 'webpack'

import common from './webpack-common'

common.entry.splice(0, 0,
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server'
)

export default {
  ...common,
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
      },
      {
        reload: false
      }
    )
  ]
}
