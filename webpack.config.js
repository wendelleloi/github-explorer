const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebPackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  // Determina o modo com que o webpack compila o código
  mode: isDevelopment ? 'development' : 'production',

  // Determina que o webpack deve exibir o erro mais real possível para debugar erros no console do browser
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',

  // Determina o arquivo principal de entrada
  entry: path.resolve(__dirname, 'src', 'index.tsx'),

  // Determina o arquivo gerado
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // Determina plugins que serão usados pelo webpack
  plugins:[
    // plugin que adiciona o Fast Refresh
    isDevelopment && new ReactRefreshWebPackPlugin(),
    // plugin que gera automáticamente um arquivo HTML com o bundle gerado
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),

  // Determina quais extenções de arquvivos serão lidos
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  // Inicializa um servidor local de desenvolvimento com hot refresh
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true
  },

  // Determina como a aplicação vai ser comportar quando importar cada tipo de arquivo
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        // Babel loader - integração entre o babel e webpack
        use: {
          loader: 'babel-loader',
          options:{
            plugins: [
              /* isDevelopment && require Significa um ternário com apenas a condição verdadeira */
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  }
}