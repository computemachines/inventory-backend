const {resolve, join} = require("path")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = () => {
  return {
    context: resolve("src"),
    entry: ["./scripts/entry.js"],
    output: {
      path: resolve("dist/assets"),
      publicPath: "/assets/",
      filename: "bundle.js"
    },
    mode: 'development',
    devtool: 'source-maps',
    devServer: {
      contentBase: resolve("dist"),
      historyApiFallback: true,
      port:8080,
      host:'0.0.0.0'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"],
	    plugins: ["react-hot-loader/babel"]
          }
        }
      }, {
	test: /\.css$/,
	use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
	use: [{loader: 'style-loader'},
	      {loader: 'css-loader'},
	      {loader: 'sass-loader',
	       options: {
		 includePaths: ['./node_modules']
	       }}]
	//   use: [
	//     {loader: 'css-loader'},
	//     {loader: 'sass-loader',
	//      option: {
	//        includePaths: ['./node_modules']
	//      }}
	//   ]
      }, {
	test: /\.(woff|woff2)$/,
	use: [{
	  loader: 'url-loader',
	  options: {
	    // Limit at 50k. Above that it emits separate files
	    limit: 50000,

	    // url-loader sets mimetype if it's passed.
	    // Without this it derives it from the file extension
	    mimetype: "application/font-woff",

	    // Output below fonts directory
	    name: "fonts/[name].[ext]"
	  }
	}]
      }]
    },
    plugins: [
      new CopyWebpackPlugin([{
	from: 'index.html', to: '../index.html'
      }])
    ]
  }
}
