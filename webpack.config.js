const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devServerPort = 9000
const dest = path.resolve(__dirname, './docs/')

const html = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, './src/index.html'),
  filename: 'index.html',
  inject: 'body'
})

const provideRiot = new Webpack.ProvidePlugin({
  riot: 'riot'
})

const riotRule = {
  test: /\.tag$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: 'riotjs-loader'
}

const jsRule = {
  test: /\.js$|\.tag$/,
  exclude: /node_modules/,
  use: 'babel-loader'
}

const devRules = [
  riotRule,
  jsRule,
  {
    test: /\.(html)$/,
    use: {
      loader: 'html-loader',
      options: {
        attrs: ['img:src', 'img:data-src', 'img:srcset', 'source:srcset'],
        minimize: false,
        root: '.'
      }
    }
  },
  {
    test: /\.(jpe?g|png|gif)$/i,
    use: ['url-loader']
  },
  {
    test: /\.scss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader']
  }
]

const prodRules = [
  riotRule,
  jsRule,
  {
    test: /\.(html)$/,
    use: {
      loader: 'html-loader',
      options: {
        attrs: ['img:src', 'img:data-src', 'img:srcset', 'source:srcset'],
        minimize: true
      }
    }
  },
  {
    test: /\.(jpe?g|png|gif)$/i,
    use: ['url-loader']
    // use: ['file-loader']
  },
  {
    test: /\.scss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  }
]

const config = {
  module: {},

  resolve: {
    modules: ['node_modules']
  },

  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },

  output: {
    // filename: 'bundle-[hash].js',
    filename: 'bundle.js',
    publicPath: `http://localhost:${devServerPort}/`,
    path: dest
  },

  plugins: [html, provideRiot]
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = '#cheap-source-map'

    config.plugins.push(new Webpack.HotModuleReplacementPlugin())

    config.module.rules = devRules

    config.devServer = {
      hot: true,
      inline: true,
      contentBase: dest,
      publicPath: `http://localhost:${devServerPort}/`,
      port: devServerPort
    }
  } else {
    config.module.rules = prodRules
    config.output.publicPath = './'
    config.plugins.push(
      new MiniCssExtractPlugin({
        // filename: 'bundle-[hash].css'
        filename: 'bundle.css'
      })
    )
  }

  return config
}
