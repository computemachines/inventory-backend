const {resolve} = require("path")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = () => {
  return {
    context: resolve("src"),
    entry: "./scripts/entry.js",
    output: {
      path: resolve("dist/assets"),
      publicPath: "/assets/",
      filename: "bundle.js"
    },
    devtool: 'source-maps',
    devServer: {
      contentBase: resolve("dist"),
      historyApiFallback: true,
      port:8080
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
    },
    plugins: [
      new CopyWebpackPlugin([{from: 'index.html', to: '../index.html'}])
    ]
  }
}
