const {resolve, join} = require("path")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = () => {
  return {
    context: resolve("src"),
    entry: ["./scripts/entry.js", "@material/button/mdc-button.scss"],
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
            presets: ["es2015", "react"],
	    plugins: ["react-hot-loader/babel"]
          }
        }
      }, {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
	    modules: true,
	    camelCase: true,
	    localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }]
      }, {
	test: /\.scss$/,
	exclude: ['./src'],
	use: [{loader: 'echo-loader?msg=sassEnd'}, {loader: 'style-loader'},
	      {loader: 'css-loader'},
	      {loader: 'sass-loader',
	       options: {
		 includePaths: ['./node_modules']
	       }
	      }, {loader: 'echo-loader?msg=sassHead'}]
      },{
	test: /\.scss$/,
	exclude: ['./node_modules'],
	use: [{loader: 'echo-loader?msg=moduleSassEnd'}, {loader: 'style-loader'},
	      {loader: 'css-loader',
	       options: {
		 modules: true,
		 camelCase: true,
		 // includePaths: ['./node_modules'],
		 localIdentName: '[name]__[local]___[hash:base64:5]'
               }
	      },
	      {loader: 'sass-loader',
	       options: {
		 includePaths: ['./node_modules']
	       }}, {loader: 'echo-loader?msg=moduleSassHead'}]
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
      new ExtractTextPlugin("styles.css"),
      new CopyWebpackPlugin([{
	from: 'index.html', to: '../index.html'
      }])
    ]
  }
}
